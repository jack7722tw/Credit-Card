import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "fubon-momo",
  bank: "台北富邦銀行",
  name: "momo 聯名卡（Titanium）",
  nameEn: "Fubon momo Card",
  type: "credit",
  network: ["VISA"],
  annualFee: 0,
  annualFeeWaiver: "免年費",
  officialUrl: "https://www.fubon.com/banking/personal/card/intro/momocard.htm",
  year: 2026,
  tags: ["momo", "電商", "網購", "現金回饋"],
};

export const benefits: Benefit[] = [
  {
    id: "fubon-momo-momo",
    cardId: "fubon-momo",
    categoryId: "ecommerce",
    title: "momo 購物網消費加碼回饋",
    description: "於 momo 購物網、momo 行動購物 App 消費享高比例 momo 幣回饋。",
    rewardType: "cashback",
    rewardValue: 5,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 90,
    conditions: ["須於 momo 結帳時選擇本卡", "回饋以 momo 幣折抵", "可能有單筆/月上限"],
    notes: "%實際以 momo 與富邦最新方案為準",
  },
  {
    id: "fubon-momo-other-ec",
    cardId: "fubon-momo",
    categoryId: "ecommerce",
    title: "其他電商加碼",
    description: "於其他指定電商通路（PChome、蝦皮等）消費享加碼。",
    rewardType: "cashback",
    rewardValue: 2,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 55,
    conditions: ["須登錄", "限指定通路", "有月上限"],
  },
  {
    id: "fubon-momo-base",
    cardId: "fubon-momo",
    categoryId: "general",
    title: "一般消費基本回饋",
    description: "一般通路刷卡享基本 momo 幣或現金回饋。",
    rewardType: "cashback",
    rewardValue: 1,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 30,
    conditions: ["一般刷卡"],
  },
];
