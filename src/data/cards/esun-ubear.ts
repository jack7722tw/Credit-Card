import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "esun-ubear",
  bank: "玉山銀行",
  name: "Ubear 卡",
  nameEn: "Ubear Card",
  type: "credit",
  network: ["Master", "JCB"],
  annualFee: 0,
  annualFeeWaiver: "免年費",
  officialUrl: "https://www.esunbank.com.tw/zh-tw/personal/credit/card/intro/all/ubear-card",
  year: 2026,
  tags: ["年輕族群", "影音串流", "行動支付", "外送"],
};

export const benefits: Benefit[] = [
  {
    id: "esun-ubear-streaming",
    cardId: "esun-ubear",
    categoryId: "streaming",
    title: "影音/音樂串流加碼回饋",
    description: "Netflix、Spotify、YouTube Premium、Disney+、Apple Music 等串流訂閱加碼回饋。",
    rewardType: "cashback",
    rewardValue: 3.3,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 80,
    conditions: ["須登錄活動", "限指定串流平台", "回饋有月上限"],
  },
  {
    id: "esun-ubear-food-delivery",
    cardId: "esun-ubear",
    categoryId: "dining",
    title: "外送平台加碼回饋",
    description: "Uber Eats、foodpanda 等外送平台消費享加碼回饋。",
    rewardType: "cashback",
    rewardValue: 3.3,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 75,
    conditions: ["須登錄活動", "限指定平台", "有月上限"],
  },
  {
    id: "esun-ubear-mobile",
    cardId: "esun-ubear",
    categoryId: "mobile_payment",
    title: "行動支付加碼",
    description: "Apple Pay / Google Pay / Samsung Pay / LINE Pay / 街口 等綁定本卡享加碼。",
    rewardType: "cashback",
    rewardValue: 3.3,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 70,
    conditions: ["須登錄活動", "排除部分通路"],
    notes: "%與上限請以官網最新公告為準",
  },
  {
    id: "esun-ubear-base",
    cardId: "esun-ubear",
    categoryId: "general",
    title: "一般消費基本回饋",
    description: "一般通路刷卡享基本玉山點數回饋。",
    rewardType: "cashback",
    rewardValue: 0.3,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 20,
    conditions: ["一般刷卡"],
  },
];
