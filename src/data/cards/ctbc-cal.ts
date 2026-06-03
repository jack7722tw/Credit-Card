import type { Card, Benefit } from "@/lib/types";

// 資料來源：
// - 中信華航聯名卡 minisite：https://www.ctbcbank.com/content/dam/minisite/long/creditcard/CTBCCI/product/index.html
// - 卡優新聞網：https://www.cardu.com.tw/card/card_info.php?cc_pk=3621
// Last reviewed: 2026-05

export const card: Card = {
  id: "ctbc-cal",
  bank: "中國信託銀行",
  name: "中華航空聯名卡（商務御璽）",
  nameEn: "China Airlines Signature Business",
  type: "credit",
  network: ["VISA"],
  annualFee: 3600,
  annualFeeWaiver: "首年免年費；申辦電子/行動帳單並綁定 LINE BC 即終身免年費",
  officialUrl: "https://www.ctbcbank.com/content/dam/minisite/long/creditcard/CTBCCI/product/index.html",
  year: 2026,
  tags: ["哩程", "華航", "Signature", "生日海外加碼"],
};

const LOUNGE_SPEND =
  "達消費門檻其一即可：近 1 個月 NT$20,000 / 近 3 個月 NT$100,000 / 近 12 個月 NT$600,000（不含繳稅）/ 前 90 日刷國外機票或團費 NT$20,000";

export const benefits: Benefit[] = [
  {
    id: "ctbc-cal-miles-base",
    cardId: "ctbc-cal",
    categoryId: "general",
    title: "國內消費哩程",
    description: "一般消費每 NT$30 累積 1 華夏哩程。",
    rewardType: "miles",
    rewardValue: 1,
    rewardUnit: "miles",
    rewardLabel: "30元/哩",
    needsRegistration: false,
    priorityScore: 50,
    conditions: ["每 NT$30 = 1 哩"],
    sourceUrl:
      "https://www.ctbcbank.com/content/dam/minisite/long/creditcard/CTBCCI/product/index.html",
  },
  {
    id: "ctbc-cal-miles-overseas",
    cardId: "ctbc-cal",
    categoryId: "overseas",
    title: "海外 / 華航通路 2 倍哩程",
    description:
      "海外消費、華航/華信官網購票、華航 eMall、e-Shopping 免稅品、機上免稅品消費，每 NT$15 = 1 哩。",
    rewardType: "miles",
    rewardValue: 2,
    rewardUnit: "miles",
    rewardLabel: "15元/哩",
    needsRegistration: false,
    priorityScore: 80,
    maxBenefitPerMonth: 20000,
    conditions: [
      "海外消費認列依國際組織",
      "正/附卡每月各享上限 20,000 加碼哩",
    ],
  },
  {
    id: "ctbc-cal-miles-birthday",
    cardId: "ctbc-cal",
    categoryId: "overseas",
    title: "生日當月海外消費 3 倍哩程",
    description: "生日當月國外消費，每 NT$10 = 1 哩（基本 1 倍 + 加碼 2 倍）。",
    rewardType: "miles",
    rewardValue: 3,
    rewardUnit: "miles",
    rewardLabel: "生日 10元/哩",
    needsRegistration: false,
    priorityScore: 85,
    conditions: ["限生日當月海外消費", "附卡持卡人生日當月同享 3 倍"],
  },
  {
    id: "ctbc-cal-lounge",
    cardId: "ctbc-cal",
    categoryId: "airport_lounge",
    title: "機場貴賓室年 4 次",
    description:
      "於配合機場貴賓室一年享 4 次免費入場（以每戶計算），含環亞、龍騰等指定貴賓室。",
    rewardType: "free_quota",
    rewardValue: 4,
    rewardUnit: "times",
    needsRegistration: true,
    familyEligible: false,
    priorityScore: 88,
    conditions: ["以每戶計算次數", LOUNGE_SPEND],
    sourceUrl: "https://www.scottt.org/visa-signature-business-plaza-premium-lounge/",
    notes: "可進入桃園機場環亞貴賓室",
  },
  {
    id: "ctbc-cal-airport-transfer",
    cardId: "ctbc-cal",
    categoryId: "airport_transfer",
    title: "機場接送每戶年 1 次",
    description: "每戶一年 1 次單程接送（活動方案調整中，請以最新公告為準）。",
    rewardType: "free_quota",
    rewardValue: 1,
    rewardUnit: "times",
    needsRegistration: true,
    bookingPhone: "0800-024-365",
    familyEligible: true,
    priorityScore: 60,
    conditions: ["每戶一年 1 次", LOUNGE_SPEND, "建議搭機前 3 天以上預約"],
  },
  {
    id: "ctbc-cal-roadside",
    cardId: "ctbc-cal",
    categoryId: "roadside",
    title: "道路救援年 3 次 50km",
    description: "免費道路救援一年 3 次，每次 50 公里以內。",
    rewardType: "free_quota",
    rewardValue: 3,
    rewardUnit: "times",
    needsRegistration: true,
    priorityScore: 60,
    conditions: [
      "一年 3 次，每次 50 公里",
      "近 1 個月消費 NT$3,000 或近 3 個月 NT$9,000",
      "含免費拖吊、更換備胎、充氣、充電、加水",
      "服務期至 2026/12/31",
    ],
  },
  {
    id: "ctbc-cal-travel-insurance",
    cardId: "ctbc-cal",
    categoryId: "travel_insurance",
    title: "高額旅平險 / 旅遊不便險",
    description:
      "旅平險 5,000 萬；旅遊不便險：班機延誤 1 萬、行李延誤 1 萬、行李遺失 3 萬、行程縮短險 3 萬、文件遺失 5,000、劫機險日 5,000。",
    rewardType: "free_service",
    needsRegistration: false,
    familyEligible: true,
    priorityScore: 72,
    conditions: ["須以本卡刷全額交通票款"],
  },
  {
    id: "ctbc-cal-welcome",
    cardId: "ctbc-cal",
    categoryId: "general",
    title: "首刷 / 入會贈哩",
    description:
      "新戶核卡 30 日內消費滿 NT$888 享 1,000 哩或贈品；首刷後綁定華夏會員另享 1,000 哩。",
    rewardType: "miles",
    rewardValue: 2000,
    rewardUnit: "miles",
    needsRegistration: true,
    priorityScore: 40,
    conditions: ["新戶限定", "30 日內消費滿 NT$888", "綁定華夏會員"],
  },
];
