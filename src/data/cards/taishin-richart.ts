import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "taishin-richart",
  bank: "台新銀行",
  name: "Richart 信用卡（Signature Business）",
  nameEn: "Taishin Richart Card",
  type: "credit",
  network: ["VISA"],
  annualFee: 0,
  annualFeeWaiver: "免年費",
  officialUrl: "https://www.taishinbank.com.tw/TSB/personal/credit/intro/now/richart/",
  year: 2026,
  tags: ["Richart", "數位帳戶", "行動支付", "現金回饋"],
};

export const benefits: Benefit[] = [
  {
    id: "taishin-richart-mobile",
    cardId: "taishin-richart",
    categoryId: "mobile_payment",
    title: "行動支付加碼回饋",
    description: "Apple Pay / Google Pay / Samsung Pay / LINE Pay / 街口 等綁定本卡享加碼回饋。",
    rewardType: "cashback",
    rewardValue: 2.7,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 75,
    conditions: ["須持有 Richart 帳戶", "須登錄活動", "有月上限"],
    notes: "%與上限請以官網最新為準",
  },
  {
    id: "taishin-richart-ec",
    cardId: "taishin-richart",
    categoryId: "ecommerce",
    title: "電商網購加碼",
    description: "於指定電商（蝦皮、PChome、momo 等）消費享加碼回饋。",
    rewardType: "cashback",
    rewardValue: 2.7,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 65,
    conditions: ["限指定通路", "須登錄"],
  },
  {
    id: "taishin-richart-streaming",
    cardId: "taishin-richart",
    categoryId: "streaming",
    title: "影音串流訂閱回饋",
    description: "Netflix、Spotify、YouTube Premium 等指定串流訂閱加碼。",
    rewardType: "cashback",
    rewardValue: 2.7,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 60,
    conditions: ["限指定平台", "須登錄"],
  },
  {
    id: "taishin-richart-base",
    cardId: "taishin-richart",
    categoryId: "general",
    title: "一般消費基本回饋",
    description: "一般通路刷卡基本現金回饋（自動回饋至 Richart 帳戶）。",
    rewardType: "cashback",
    rewardValue: 1,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 35,
    conditions: ["須持有 Richart 帳戶才能領取回饋"],
  },
];
