import type { Card, Benefit } from "@/lib/types";

// 資料來源：
// - 玉山活動頁：https://event.esunbank.com.tw/credit/ubear/
// - CreditCards.com.tw、iCard.ai
// Last reviewed: 2026-05

export const card: Card = {
  id: "esun-ubear",
  bank: "玉山銀行",
  name: "Ubear 卡",
  nameEn: "U Bear Card",
  type: "credit",
  network: ["Master", "JCB"],
  annualFee: 0,
  annualFeeWaiver: "免年費（但回饋需設定電子帳單 + 玉山帳戶自扣繳）",
  officialUrl: "https://event.esunbank.com.tw/credit/ubear/index.html",
  year: 2026,
  tags: ["串流", "網購", "行動支付", "年輕族群"],
};

export const benefits: Benefit[] = [
  {
    id: "esun-ubear-streaming",
    cardId: "esun-ubear",
    categoryId: "streaming",
    title: "指定數位訂閱 10% 回饋",
    description:
      "Netflix / Spotify / Disney+ / PlayStation / 任天堂等指定數位訂閱享 10% 現金回饋。",
    rewardType: "cashback",
    rewardValue: 10,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 92,
    maxBenefitPerMonth: 100,
    conditions: [
      "需設定電子帳單 + 玉山帳戶自扣繳",
      "限指定平台：Netflix / Spotify / Disney+ / PlayStation / 任天堂",
      "回饋月上限 NT$100（每月最高刷 NT$1,000）",
    ],
    validUntil: "2026-08-31",
    sourceUrl: "https://event.esunbank.com.tw/credit/ubear/index.html",
  },
  {
    id: "esun-ubear-online",
    cardId: "esun-ubear",
    categoryId: "ecommerce",
    title: "網購 + 行動支付 3% 回饋",
    description:
      "蝦皮 / momo / PChome / LINE Pay / 街口 / 全支付 / 訂房訂票 / 外送平台等指定通路享 3%（基本 1% + 加碼 2%）。",
    rewardType: "cashback",
    rewardValue: 3,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 80,
    maxBenefitPerMonth: 150,
    conditions: [
      "需設定電子帳單 + 玉山帳戶自扣繳",
      "加碼回饋每期上限 NT$150",
      "指定第三方支付：LINE Pay / 街口 / 全支付 / 悠遊付 / icash Pay 等",
      "認列以玉山系統為準",
    ],
    validUntil: "2026-08-31",
  },
  {
    id: "esun-ubear-new-user",
    cardId: "esun-ubear",
    categoryId: "ecommerce",
    title: "新戶網購/行支 10% 回饋（首半年）",
    description:
      "新戶申請並設定玉山帳戶自扣繳，核卡後次月起 6 個月內網購 + 行動支付享額外 7%，合計最高 10%。",
    rewardType: "cashback",
    rewardValue: 10,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 70,
    maxBenefitPerMonth: 200,
    conditions: [
      "限新戶（含本卡新申辦或舊戶新核發）",
      "需以玉山帳戶自扣繳卡款",
      "加碼 7% 月上限 NT$200（每月最高刷 NT$2,857）",
      "活動 6 個月後恢復一般 3%",
    ],
    validUntil: "2026-08-31",
  },
  {
    id: "esun-ubear-base",
    cardId: "esun-ubear",
    categoryId: "general",
    title: "一般消費基本回饋",
    description: "一般通路刷卡基本回饋（請以最新方案為準）。",
    rewardType: "cashback",
    rewardValue: 0.3,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 15,
    conditions: ["未在加碼範圍的一般消費"],
  },
];
