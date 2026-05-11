import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "ctbc-linepay",
  bank: "中國信託銀行",
  name: "LINE Pay 信用卡",
  type: "credit",
  network: ["VISA"],
  annualFee: 0,
  annualFeeWaiver: "免年費",
  officialUrl: "https://www.ctbcbank.com/twrbo/zh_tw/personal_credit_linepay.html",
  year: 2026,
  tags: ["LINE Pay", "LINE Points", "行動支付"],
};

export const benefits: Benefit[] = [
  {
    id: "ctbc-linepay-linepay",
    cardId: "ctbc-linepay",
    categoryId: "mobile_payment",
    title: "LINE Pay 消費 LINE Points 回饋",
    description: "綁定 LINE Pay 消費享 LINE Points 回饋。",
    rewardType: "cashback",
    rewardValue: 2,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 80,
    conditions: ["透過 LINE Pay 付款", "回饋以 LINE Points 形式發放"],
    notes: "％與上限請以官網最新公告為準",
  },
  {
    id: "ctbc-linepay-overseas",
    cardId: "ctbc-linepay",
    categoryId: "overseas",
    title: "海外消費 LINE Points 回饋",
    description: "海外刷卡享 LINE Points 加碼回饋。",
    rewardType: "cashback",
    rewardValue: 3,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 70,
    conditions: ["境外消費認列依國際組織"],
  },
  {
    id: "ctbc-linepay-base",
    cardId: "ctbc-linepay",
    categoryId: "general",
    title: "一般消費 LINE Points 基本回饋",
    description: "一般通路刷卡 LINE Points 回饋。",
    rewardType: "cashback",
    rewardValue: 1,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 40,
    conditions: ["一般刷卡"],
  },
];
