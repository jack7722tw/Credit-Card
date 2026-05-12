import type { Card, Benefit } from "@/lib/types";

// 資料來源：
// - 中信 ANA minisite：https://www.ctbcbank.com/content/dam/minisite/long/creditcard/ANA/p5.html
// - 卡優新聞網（卡片整理）
// Last reviewed: 2026-05

export const card: Card = {
  id: "ctbc-ana",
  bank: "中國信託銀行",
  name: "ANA 聯名卡（無限卡 / Infinite）",
  nameEn: "ANA Co-brand Infinite",
  type: "credit",
  network: ["VISA"],
  annualFee: 8000,
  annualFeeWaiver: "正卡首年優惠價 6,600 元；附卡 4,000 元（首年 3,300 元）",
  officialUrl: "https://www.ctbcbank.com/twrbo/zh_tw/cc_index/cc_product/cc_introduction_index/C_ANA.html",
  year: 2026,
  tags: ["哩程", "ANA", "Infinite", "高端", "機場貴賓室"],
};

const SPEND_THRESHOLD =
  "達消費門檻其一即可：近 1 個月 NT$20,000、近 3 個月 NT$100,000、或近 12 個月 NT$600,000";

export const benefits: Benefit[] = [
  {
    id: "ctbc-ana-miles-domestic",
    cardId: "ctbc-ana",
    categoryId: "general",
    title: "國內消費 ANA 哩程累積",
    description: "國內一般消費每 NT$20 累積 1 ANA 哩程。",
    rewardType: "miles",
    rewardValue: 1,
    rewardUnit: "miles",
    needsRegistration: false,
    priorityScore: 70,
    conditions: ["每 NT$20 = 1 ANA 哩程", "排除代收稅費、保費等部分項目"],
    sourceUrl:
      "https://www.ctbcbank.com/content/dam/minisite/long/creditcard/ANA/index.html",
  },
  {
    id: "ctbc-ana-miles-overseas",
    cardId: "ctbc-ana",
    categoryId: "overseas",
    title: "海外消費 ANA 哩程加碼",
    description: "海外實體 / 海外網購每 NT$10 累積 1 ANA 哩程（無限卡）。",
    rewardType: "miles",
    rewardValue: 2,
    rewardUnit: "miles",
    needsRegistration: false,
    priorityScore: 88,
    conditions: ["每 NT$10 = 1 ANA 哩程", "海外消費依國際組織認列"],
    sourceUrl:
      "https://www.ctbcbank.com/content/dam/minisite/long/creditcard/ANA/index.html",
  },
  {
    id: "ctbc-ana-miles-ana-flight",
    cardId: "ctbc-ana",
    categoryId: "overseas",
    title: "搭乘 ANA 航班飛行哩程加碼 50%",
    description: "持本卡購買並搭乘 ANA 營運國際線航班，飛行哩程加碼 50%。",
    rewardType: "miles",
    rewardValue: 50,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 75,
    conditions: ["限以本卡購買 ANA 機票並實際搭乘 ANA 營運航班"],
  },
  {
    id: "ctbc-ana-parking-urban",
    cardId: "ctbc-ana",
    categoryId: "parking",
    title: "市區停車",
    description:
      "於配合市區停車場享每日 2 小時免費停車，每月上限 10 次。極緻 / 無限 / 商務御璽卡以「每戶」計算次數，門檻更彈性。",
    rewardType: "free_quota",
    rewardValue: 2,
    rewardUnit: "hours",
    needsRegistration: true,
    priorityScore: 88,
    conditions: [
      "每日免費 2 小時、每月最多 10 次",
      "適用 ANA 極緻卡 / 無限卡 / 商務御璽卡",
      "以「每戶」計算（同戶卡片次數合併計算）",
      SPEND_THRESHOLD,
      "限配合的市區停車場（詳見市區停車權益網頁）",
    ],
    sourceUrl:
      "https://www.ctbcbank.com/content/dam/minisite/long/creditcard/ANA/p5.html",
  },
  {
    id: "ctbc-ana-airport-parking",
    cardId: "ctbc-ana",
    categoryId: "parking",
    title: "機場停車（不限次）",
    description: "於配合機場停車場享免費停車，一年不限次數，每次最多 30 天。",
    rewardType: "free_service",
    needsRegistration: true,
    priorityScore: 80,
    conditions: [
      "一年不限次，每次最多 30 天",
      "適用 ANA 極緻 / 無限 / 晶緻 / 商務御璽卡",
      "以「每卡」計算",
      SPEND_THRESHOLD,
      "限配合機場停車場",
    ],
    sourceUrl:
      "https://www.ctbcbank.com/content/dam/minisite/long/creditcard/ANA/p5.html",
  },
  {
    id: "ctbc-ana-lounge",
    cardId: "ctbc-ana",
    categoryId: "airport_lounge",
    title: "機場貴賓室年 4 次",
    description: "於配合機場貴賓室一年享 4 次免費入場（以每卡計算）。",
    rewardType: "free_quota",
    rewardValue: 4,
    rewardUnit: "times",
    needsRegistration: true,
    familyEligible: false,
    priorityScore: 90,
    conditions: [
      "一年 4 次免費入場",
      "適用 ANA 極緻 / 無限 / 晶緻 / 商務御璽卡",
      "以「每卡」計算",
      SPEND_THRESHOLD,
      "同行眷屬通常需付費",
    ],
    sourceUrl:
      "https://www.ctbcbank.com/content/dam/minisite/long/creditcard/ANA/p5.html",
  },
  {
    id: "ctbc-ana-airport-transfer",
    cardId: "ctbc-ana",
    categoryId: "airport_transfer",
    title: "機場接送年 2 次",
    description:
      "桃園 / 松山 / 台中 / 高雄機場及指定服務範圍，享一年 2 次免費單程接送。",
    rewardType: "free_quota",
    rewardValue: 2,
    rewardUnit: "times",
    needsRegistration: true,
    bookingPhone: "0800-024-365",
    familyEligible: true,
    priorityScore: 88,
    conditions: [
      "一年 2 次單程",
      "限 ANA 極緻卡 / 無限卡",
      SPEND_THRESHOLD,
      "服務四大機場：桃園、松山、台中、高雄（含指定區域）",
      "建議搭機前 3 天以上預約",
      "服務範圍外可加價",
    ],
    sourceUrl:
      "https://www.ctbcbank.com/content/dam/minisite/long/creditcard/ANA/p5.html",
  },
  {
    id: "ctbc-ana-roadside",
    cardId: "ctbc-ana",
    categoryId: "roadside",
    title: "道路救援年 3 次 100km",
    description: "免費道路救援一年 3 次，每次拖吊最多 100 公里。",
    rewardType: "free_quota",
    rewardValue: 3,
    rewardUnit: "times",
    needsRegistration: true,
    priorityScore: 70,
    conditions: [
      "一年 3 次，每次最多 100 公里",
      "限 ANA 極緻卡 / 無限卡",
      "以「每戶」計算",
      "近 1 個月消費 NT$3,000 或近 3 個月 NT$9,000 即可使用",
    ],
    sourceUrl:
      "https://www.ctbcbank.com/content/dam/minisite/long/creditcard/ANA/p5.html",
  },
  {
    id: "ctbc-ana-travel-insurance",
    cardId: "ctbc-ana",
    categoryId: "travel_insurance",
    title: "高額旅平險 / 海外全程險",
    description:
      "公共運輸旅平險最高 NT$5,000 萬，海外全程險最高 NT$1,000 萬，並含班機延誤、行李延誤等不便險。",
    rewardType: "free_service",
    needsRegistration: false,
    familyEligible: true,
    priorityScore: 75,
    conditions: [
      "公共運輸旅平險：須以本卡刷全額交通票款",
      "海外全程險：須以本卡刷 80% 以上團費或全額機票",
      "本人 / 配偶 / 未成年子女同行均涵蓋",
    ],
    sourceUrl:
      "https://www.ctbcbank.com/content/dam/minisite/long/creditcard/ANA/p5.html",
  },
  {
    id: "ctbc-ana-japan-shopping",
    cardId: "ctbc-ana",
    categoryId: "overseas",
    title: "日本購物優惠",
    description: "ANA 機上免稅店 9 折 / 95 折，丸井百貨等指定通路 9 折起。",
    rewardType: "discount",
    rewardValue: 10,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 55,
    conditions: ["ANA 機上免稅店", "丸井百貨等指定通路", "其他指定日本店家"],
    sourceUrl:
      "https://www.ctbcbank.com/content/dam/minisite/long/creditcard/ANA/index.html",
  },
];
