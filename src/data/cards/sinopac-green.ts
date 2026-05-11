import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "sinopac-green",
  bank: "永豐銀行",
  name: "Green 卡（Titanium Business）",
  nameEn: "SinoPac Green Card",
  type: "credit",
  network: ["VISA"],
  annualFee: 0,
  annualFeeWaiver: "免年費",
  officialUrl: "https://bank.sinopac.com/sinopacBT/personal/credit-card/intro.html",
  year: 2026,
  tags: ["環保", "綠色生活", "大眾運輸", "現金回饋"],
};

export const benefits: Benefit[] = [
  {
    id: "sinopac-green-transit",
    cardId: "sinopac-green",
    categoryId: "hsr",
    title: "大眾運輸 / 高鐵 加碼回饋",
    description: "高鐵、台鐵、悠遊卡自動加值、客運等大眾運輸消費享加碼現金回饋。",
    rewardType: "cashback",
    rewardValue: 3,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 80,
    conditions: ["須登錄活動", "限指定 MCC", "有月上限"],
    notes: "%與上限請以官網最新為準",
  },
  {
    id: "sinopac-green-eco",
    cardId: "sinopac-green",
    categoryId: "general",
    title: "綠色消費加碼",
    description: "於指定綠色 / 永續類通路（電動車充電、二手循環等）消費享加碼回饋。",
    rewardType: "cashback",
    rewardValue: 3,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 70,
    conditions: ["須登錄", "限指定通路名單"],
  },
  {
    id: "sinopac-green-mobile",
    cardId: "sinopac-green",
    categoryId: "mobile_payment",
    title: "行動支付回饋",
    description: "Apple Pay / Google Pay / LINE Pay 綁定本卡享回饋。",
    rewardType: "cashback",
    rewardValue: 1.5,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 55,
    conditions: ["排除特定 MCC"],
  },
  {
    id: "sinopac-green-base",
    cardId: "sinopac-green",
    categoryId: "general",
    title: "一般消費基本回饋",
    description: "其他一般消費基本現金回饋。",
    rewardType: "cashback",
    rewardValue: 0.5,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 25,
    conditions: ["一般刷卡"],
  },
];
