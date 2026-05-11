import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "ctbc-cal",
  bank: "中國信託銀行",
  name: "中華航空聯名卡（商務御璽）",
  nameEn: "China Airlines Signature Business",
  type: "credit",
  network: ["VISA"],
  annualFee: 3600,
  annualFeeWaiver: "首年免年費；次年起依消費金額減免",
  officialUrl: "https://www.ctbcbank.com/twrbo/zh_tw/personal_credit_cal.html",
  year: 2026,
  tags: ["哩程", "華航", "Signature", "華夏會員"],
};

export const benefits: Benefit[] = [
  {
    id: "ctbc-cal-miles-general",
    cardId: "ctbc-cal",
    categoryId: "general",
    title: "一般消費哩程累積",
    description: "國內消費可累積華航哩程，無哩程上限。",
    rewardType: "miles",
    rewardValue: 1,
    rewardUnit: "miles",
    needsRegistration: false,
    priorityScore: 65,
    conditions: ["每 NT$25 累積 1 華夏哩程（請以官網最新為準）"],
  },
  {
    id: "ctbc-cal-miles-overseas",
    cardId: "ctbc-cal",
    categoryId: "overseas",
    title: "海外/華航消費哩程加碼",
    description: "海外消費、華航官網購票享加碼哩程。",
    rewardType: "miles",
    rewardValue: 1.5,
    rewardUnit: "miles",
    needsRegistration: false,
    priorityScore: 75,
    conditions: ["海外消費認列依國際組織", "華航官網購票最高有加倍哩程"],
    notes: "加碼倍率以官網最新公告為準",
  },
  {
    id: "ctbc-cal-lounge",
    cardId: "ctbc-cal",
    categoryId: "airport_lounge",
    title: "華航貴賓室入場（限定條件）",
    description: "依本卡等級與每年達標條件，可享華航/夢享家貴賓室次數。",
    rewardType: "free_service",
    needsRegistration: true,
    familyEligible: false,
    priorityScore: 60,
    conditions: ["年度消費需達指定門檻", "貴賓室類型與次數依當期方案而異"],
    notes: "活動內容變動頻繁，請以中信/華航最新公告為準",
  },
  {
    id: "ctbc-cal-travel-insurance",
    cardId: "ctbc-cal",
    categoryId: "travel_insurance",
    title: "旅遊不便險 / 旅平險",
    description: "刷本卡支付公共運輸全額票款，享旅遊不便險、旅平險。",
    rewardType: "free_service",
    needsRegistration: false,
    familyEligible: true,
    priorityScore: 55,
    conditions: ["須以本卡刷全額交通票款"],
  },
];
