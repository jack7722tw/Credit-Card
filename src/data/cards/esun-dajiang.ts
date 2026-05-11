import type { Card, Benefit } from "@/lib/types";

// 注意：以下為示範資料，最新權益請以銀行官網公告為準
// Last reviewed: 2026-01

export const card: Card = {
  id: "esun-dajiang",
  bank: "玉山銀行",
  name: "大江國際購物中心聯名卡",
  nameEn: "ESun x Da Jiang Card",
  type: "credit",
  network: ["Master"],
  annualFee: 0,
  annualFeeWaiver: "免年費",
  officialUrl: "https://www.esunbank.com.tw/zh-tw/personal/credit/card/intro/all",
  year: 2026,
  tags: ["大江", "百貨", "中壢", "停車"],
};

export const benefits: Benefit[] = [
  {
    id: "esun-dajiang-shop",
    cardId: "esun-dajiang",
    categoryId: "general",
    title: "大江購物中心消費加碼回饋",
    description: "於大江國際購物中心消費享加碼點數/現金回饋。",
    rewardType: "cashback",
    rewardValue: 5,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 75,
    conditions: ["須於大江購物中心刷卡", "回饋形式以官網最新為準"],
    notes: "％請以官網最新公告為準",
  },
  {
    id: "esun-dajiang-parking",
    cardId: "esun-dajiang",
    categoryId: "parking",
    title: "大江停車優惠",
    description: "於大江購物中心停車享優惠時數或折抵。",
    rewardType: "discount",
    needsRegistration: false,
    priorityScore: 60,
    conditions: ["須當日於大江消費刷本卡", "詳情請至服務台辦理"],
  },
  {
    id: "esun-dajiang-base",
    cardId: "esun-dajiang",
    categoryId: "general",
    title: "一般消費基本回饋",
    description: "一般消費可累積玉山點數。",
    rewardType: "points",
    rewardValue: 0.5,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 25,
    conditions: ["一般刷卡"],
  },
];
