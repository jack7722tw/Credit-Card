import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "taishin-flygo",
  bank: "台新銀行",
  name: "@GoGo 卡 / FlyGo 卡",
  nameEn: "FlyGo Card",
  type: "credit",
  network: ["VISA"],
  annualFee: 0,
  annualFeeWaiver: "首年免年費，次年起免年費",
  officialUrl: "https://www.taishinbank.com.tw/TSB/personal/credit/intro/now/flygo/",
  year: 2026,
  tags: ["海外", "行動支付", "外幣"],
};

export const benefits: Benefit[] = [
  {
    id: "taishin-flygo-overseas",
    cardId: "taishin-flygo",
    categoryId: "overseas",
    title: "海外/網購外幣消費 2.8% 現金回饋",
    description: "境外刷卡（含實體與網購）享 2.8% 現金回饋。",
    rewardType: "cashback",
    rewardValue: 2.8,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 90,
    conditions: ["須登錄活動", "境外消費認列以國際組織為準", "回饋有月上限（請查證最新）"],
    notes: "登錄條件與上限以官網公告為準",
  },
  {
    id: "taishin-flygo-mobile",
    cardId: "taishin-flygo",
    categoryId: "mobile_payment",
    title: "行動支付加碼回饋",
    description: "Apple Pay / Google Pay / Samsung Pay / LINE Pay 綁定本卡享加碼回饋。",
    rewardType: "cashback",
    rewardValue: 2.2,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 75,
    conditions: ["須登錄活動", "排除特定 MCC"],
  },
  {
    id: "taishin-flygo-airline",
    cardId: "taishin-flygo",
    categoryId: "overseas",
    title: "航空 / 旅遊類消費加碼",
    description: "於航空公司、訂房網等指定旅遊類消費享加碼回饋。",
    rewardType: "cashback",
    rewardValue: 2.8,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 70,
    conditions: ["MCC 須符合", "須登錄"],
  },
];
