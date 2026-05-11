import { NextResponse } from "next/server";

// AI 補充查詢端點：當使用者問到資料庫沒有的卡時，呼叫 Claude 搜尋最新權益資料。
// 只有設定了 ANTHROPIC_API_KEY 時才會啟用，否則回傳 503。

interface LookupRequest {
  bank?: string;
  cardName: string;
  category?: string;
}

const SYSTEM_PROMPT = `你是台灣信用卡權益查詢助手。使用者會問特定銀行的特定卡片的權益（特別是當年度的最新優惠）。
請根據你的知識，回傳結構化 JSON，欄位包括：
- bank: string
- cardName: string
- benefits: 陣列，每筆含 categoryId（從 parking/airport_lounge/airport_transfer/travel_insurance/dining/gas/supermarket/streaming/ecommerce/mobile_payment/overseas/general/hsr/roadside/golf/health 擇一）, title, description, rewardType (cashback/points/miles/discount/free_service/fee_waiver/free_quota), rewardValue, rewardUnit, conditions（陣列）, needsRegistration, validUntil（如果有）, sourceUrl（如果有）, notes
- caveats: string[]，提醒使用者要再次與官網驗證的事項

只回傳 JSON，不要其他文字。如果不確定，請在 notes 標明「需與官網驗證」。`;

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI 查詢未啟用：請在 .env.local 設定 ANTHROPIC_API_KEY" },
      { status: 503 },
    );
  }

  let body: LookupRequest;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "無效的請求內容" }, { status: 400 });
  }
  if (!body.cardName) {
    return NextResponse.json({ error: "缺少 cardName" }, { status: 400 });
  }

  const userPrompt =
    `請查詢「${body.bank ?? ""} ${body.cardName}」的最新權益。` +
    (body.category ? `特別關注類別：${body.category}。` : "");

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-opus-4-7",
      max_tokens: 4096,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: userPrompt }],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: `Claude API 錯誤: ${res.status}`, detail: text },
      { status: 502 },
    );
  }

  const data = (await res.json()) as {
    content?: Array<{ type: string; text?: string }>;
  };
  const text = data.content?.find((c) => c.type === "text")?.text ?? "";

  let parsed: unknown = null;
  try {
    const match = text.match(/\{[\s\S]*\}/);
    parsed = match ? JSON.parse(match[0]) : null;
  } catch {
    parsed = null;
  }

  return NextResponse.json({ raw: text, data: parsed });
}
