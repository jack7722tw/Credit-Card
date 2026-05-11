import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "mega-gogoro",
  bank: "兆豐銀行",
  name: "Gogoro Rewards 聯名卡",
  nameEn: "Mega Gogoro Card",
  type: "credit",
  network: ["VISA"],
  annualFee: 0,
  annualFeeWaiver: "免年費",
  officialUrl: "https://www.megabank.com.tw/personal/credit-card",
  year: 2026,
  tags: ["Gogoro", "電動機車", "資費月租", "Rewards"],
};

export const benefits: Benefit[] = [
  {
    id: "mega-gogoro-fee",
    cardId: "mega-gogoro",
    categoryId: "general",
    title: "Gogoro / PBGN 月租資費回饋",
    description: "Gogoro Network 騎到飽資費自動扣繳本卡享 Gogoro Rewards 點數回饋。",
    rewardType: "cashback",
    rewardValue: 5,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 85,
    conditions: ["須將 Gogoro 月租自動扣款設定本卡", "回饋以 Gogoro Rewards 點數發放"],
    notes: "%以兆豐/Gogoro 最新方案為準",
  },
  {
    id: "mega-gogoro-mobile",
    cardId: "mega-gogoro",
    categoryId: "mobile_payment",
    title: "行動支付加碼",
    description: "Apple Pay / Google Pay 等綁定本卡享加碼。",
    rewardType: "cashback",
    rewardValue: 2,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 55,
    conditions: ["須登錄", "有月上限"],
  },
  {
    id: "mega-gogoro-base",
    cardId: "mega-gogoro",
    categoryId: "general",
    title: "一般消費基本回饋",
    description: "一般通路刷卡基本 Rewards 點數回饋。",
    rewardType: "cashback",
    rewardValue: 1,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 30,
    conditions: ["一般刷卡"],
  },
];
