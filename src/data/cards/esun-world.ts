import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "esun-world",
  bank: "玉山銀行",
  name: "世界卡",
  nameEn: "World Card",
  type: "credit",
  network: ["Master"],
  annualFee: 3600,
  annualFeeWaiver: "首年免年費；次年起達消費門檻免收",
  officialUrl: "https://www.esunbank.com.tw/zh-tw/personal/credit/card/intro/all/world-card",
  year: 2026,
  tags: ["World", "高端", "海外", "貴賓室"],
};

export const benefits: Benefit[] = [
  {
    id: "esun-world-cashback",
    cardId: "esun-world",
    categoryId: "overseas",
    title: "海外消費現金回饋",
    description: "海外實體與網購消費享現金回饋。",
    rewardType: "cashback",
    rewardValue: 2.2,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 80,
    conditions: ["須登錄活動", "海外消費認列依國際組織", "回饋有月上限"],
    notes: "％與上限請以官網最新公告為準",
  },
  {
    id: "esun-world-lounge",
    cardId: "esun-world",
    categoryId: "airport_lounge",
    title: "機場貴賓室服務",
    description: "World 等級持卡人享 LoungeKey 或玉山指定機場貴賓室入場（次數請查證）。",
    rewardType: "free_service",
    needsRegistration: true,
    familyEligible: false,
    priorityScore: 75,
    conditions: ["須申請啟用", "免費次數有限", "同行眷屬通常需付費"],
    notes: "LoungeKey 條件與次數依當期方案調整",
  },
  {
    id: "esun-world-airport-transfer",
    cardId: "esun-world",
    categoryId: "airport_transfer",
    title: "機場接送",
    description: "持卡人享機場接送服務（次數依當期方案）。",
    rewardType: "free_service",
    needsRegistration: true,
    familyEligible: true,
    priorityScore: 65,
    conditions: ["須事先預約", "服務範圍限指定區域"],
  },
  {
    id: "esun-world-travel-insurance",
    cardId: "esun-world",
    categoryId: "travel_insurance",
    title: "旅遊不便險",
    description: "刷本卡支付公共運輸票款享旅遊不便險與旅平險。",
    rewardType: "free_service",
    needsRegistration: false,
    familyEligible: true,
    priorityScore: 60,
    conditions: ["須以本卡刷全額票款"],
  },
];
