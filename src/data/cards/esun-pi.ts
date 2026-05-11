import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "esun-pi",
  bank: "玉山銀行",
  name: "Pi 拍錢包信用卡",
  nameEn: "Pi Wallet Card",
  type: "credit",
  network: ["VISA", "Master"],
  annualFee: 0,
  annualFeeWaiver: "免年費",
  officialUrl: "https://www.esunbank.com.tw/zh-tw/personal/credit/card/intro/all/pi-card",
  year: 2026,
  tags: ["P幣", "PChome", "網購"],
};

export const benefits: Benefit[] = [
  {
    id: "esun-pi-pchome",
    cardId: "esun-pi",
    categoryId: "ecommerce",
    title: "PChome / Pi 拍錢包消費 P 幣回饋",
    description: "於 PChome 24h、PChome 商店街、Pi 拍錢包消費享高 P 幣回饋。",
    rewardType: "cashback",
    rewardValue: 5,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 85,
    conditions: ["須以 Pi 拍錢包綁定本卡支付", "回饋以 P 幣形式發放", "P 幣可折抵 1 點 = 1 元"],
    notes: "實際％以官網最新活動為準，請查證",
  },
  {
    id: "esun-pi-mobile",
    cardId: "esun-pi",
    categoryId: "mobile_payment",
    title: "Pi 拍錢包行動支付一般通路",
    description: "用 Pi 拍錢包綁定本卡於一般通路消費享 P 幣回饋。",
    rewardType: "cashback",
    rewardValue: 1.5,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 60,
    conditions: ["透過 Pi 拍錢包付款", "排除繳稅、保費等代收"],
  },
  {
    id: "esun-pi-base",
    cardId: "esun-pi",
    categoryId: "general",
    title: "一般消費基本回饋",
    description: "未透過 Pi 拍錢包之一般消費仍可獲得基本 P 幣回饋。",
    rewardType: "cashback",
    rewardValue: 0.5,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 30,
    conditions: ["實體刷卡或網路刷卡均可"],
  },
];
