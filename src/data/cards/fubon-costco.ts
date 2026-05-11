import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "fubon-costco",
  bank: "台北富邦銀行",
  name: "Costco 聯名卡（Titanium）",
  nameEn: "Fubon Costco Card",
  type: "credit",
  network: ["Master"],
  annualFee: 0,
  annualFeeWaiver: "免年費",
  officialUrl: "https://www.fubon.com/banking/personal/card/intro/costco.htm",
  year: 2026,
  tags: ["Costco", "好市多", "賣場", "現金回饋"],
};

export const benefits: Benefit[] = [
  {
    id: "fubon-costco-costco",
    cardId: "fubon-costco",
    categoryId: "supermarket",
    title: "Costco 賣場消費回饋",
    description: "於 Costco 全台分店刷本卡消費享回饋。",
    rewardType: "cashback",
    rewardValue: 1.5,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 80,
    conditions: ["須於 Costco 結帳時選擇本卡", "排除部分代收項目"],
    notes: "%以富邦最新方案為準；Costco 全台目前僅接受指定卡別",
  },
  {
    id: "fubon-costco-gas",
    cardId: "fubon-costco",
    categoryId: "gas",
    title: "Costco 加油站加碼",
    description: "於 Costco 加油站刷本卡享回饋。",
    rewardType: "cashback",
    rewardValue: 2,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 70,
    conditions: ["須於 Costco 加油站刷本卡"],
  },
  {
    id: "fubon-costco-base",
    cardId: "fubon-costco",
    categoryId: "general",
    title: "一般通路基本回饋",
    description: "Costco 以外通路刷本卡之基本回饋。",
    rewardType: "cashback",
    rewardValue: 1,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 30,
    conditions: ["一般刷卡"],
  },
];
