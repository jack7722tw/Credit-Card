import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "sinopac-dawho",
  bank: "永豐銀行",
  name: "DAWHO 現金回饋御璽卡",
  nameEn: "DAWHO World Card",
  type: "credit",
  network: ["Master"],
  annualFee: 0,
  annualFeeWaiver: "免年費",
  officialUrl: "https://bank.sinopac.com/sinopacBT/personal/credit-card/intro/dawho.html",
  year: 2026,
  tags: ["現金回饋", "DAWHO 帳戶"],
};

export const benefits: Benefit[] = [
  {
    id: "sinopac-dawho-base",
    cardId: "sinopac-dawho",
    categoryId: "general",
    title: "一般消費 1.2% 現金回饋",
    description: "全消費類別享 1.2% 現金回饋，回饋自動匯入 DAWHO 帳戶。",
    rewardType: "cashback",
    rewardValue: 1.2,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 70,
    conditions: ["須持有 DAWHO 數位帳戶", "排除部分代收/政府規費"],
    notes: "回饋上限請查證最新（過去常見每月 1000 元上限）",
    maxBenefitPerMonth: 1000,
  },
  {
    id: "sinopac-dawho-overseas",
    cardId: "sinopac-dawho",
    categoryId: "overseas",
    title: "海外消費 2.2% 回饋",
    description: "海外/國外網購刷卡享加碼回饋。",
    rewardType: "cashback",
    rewardValue: 2.2,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 75,
    conditions: ["海外消費認列依國際組織", "回饋有月上限"],
  },
];
