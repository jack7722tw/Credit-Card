import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "fubon-j",
  bank: "台北富邦銀行",
  name: "J 卡",
  nameEn: "Fubon J Card",
  type: "credit",
  network: ["VISA"],
  annualFee: 0,
  annualFeeWaiver: "免年費",
  officialUrl: "https://www.fubon.com/banking/personal/card/intro/jcard.htm",
  year: 2026,
  tags: ["年輕族群", "海外", "行動支付", "外送"],
};

export const benefits: Benefit[] = [
  {
    id: "fubon-j-overseas",
    cardId: "fubon-j",
    categoryId: "overseas",
    title: "海外消費現金回饋",
    description: "海外實體與網購消費享現金回饋。",
    rewardType: "cashback",
    rewardValue: 3,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 85,
    conditions: ["須登錄活動", "海外消費依國際組織認列", "有月上限"],
    notes: "%與上限請以官網最新為準",
  },
  {
    id: "fubon-j-mobile",
    cardId: "fubon-j",
    categoryId: "mobile_payment",
    title: "行動支付加碼回饋",
    description: "Apple Pay / Google Pay / Samsung Pay / LINE Pay / 街口等綁定本卡享加碼。",
    rewardType: "cashback",
    rewardValue: 3,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 78,
    conditions: ["須登錄", "排除特定 MCC", "有月上限"],
  },
  {
    id: "fubon-j-dining",
    cardId: "fubon-j",
    categoryId: "dining",
    title: "餐飲 / 外送加碼回饋",
    description: "Uber Eats、foodpanda 等外送平台與指定餐飲消費享加碼。",
    rewardType: "cashback",
    rewardValue: 3,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 70,
    conditions: ["限指定平台與 MCC", "須登錄"],
  },
  {
    id: "fubon-j-base",
    cardId: "fubon-j",
    categoryId: "general",
    title: "一般消費基本回饋",
    description: "一般通路刷卡基本現金回饋。",
    rewardType: "cashback",
    rewardValue: 1,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 35,
    conditions: ["一般刷卡"],
  },
];
