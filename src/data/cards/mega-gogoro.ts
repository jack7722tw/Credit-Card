import type { Card, Benefit } from "@/lib/types";

// 資料來源：
// - Gogoro Network 銀行優惠頁：https://network.gogoro.com/tw/promotions/bank-offers-summary/
// - 兆豐 Gogoro 聯名卡：https://promotion.gogoro.com/tw/megabank-co-brandcard/
// - 卡優新聞網：https://www.cardu.com.tw/card/card_info.php?cc_pk=3527
// Last reviewed: 2026-05

export const card: Card = {
  id: "mega-gogoro",
  bank: "兆豐銀行",
  name: "Gogoro Rewards 聯名卡",
  nameEn: "Mega Gogoro Co-brand Card",
  type: "credit",
  network: ["VISA"],
  annualFee: 0,
  annualFeeWaiver: "代扣 Gogoro 電池資費即免年費",
  officialUrl: "https://promotion.gogoro.com/tw/megabank-co-brandcard/",
  year: 2026,
  tags: ["Gogoro", "電動機車", "資費月租", "PBGN"],
};

export const benefits: Benefit[] = [
  {
    id: "mega-gogoro-fee-base",
    cardId: "mega-gogoro",
    categoryId: "general",
    title: "Gogoro 電池資費 5% + 加碼最高 16%",
    description:
      "Gogoro Network 電池服務資費基本 5% 回饋；前期消費滿 NT$5,000 加碼 7%；當期一般消費滿 NT$5,000（含資費）再加碼 5%；自動扣繳成功再加 6%。最高可達 16%。",
    rewardType: "cashback",
    rewardValue: 16,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 92,
    maxBenefitPerMonth: 230,
    conditions: [
      "基本回饋 5%（每期上限 NT$65）",
      "前期帳單消費滿 NT$5,000 加碼 7%（每期上限 NT$65）",
      "當期一般消費滿 NT$5,000（含電池資費）加碼 5%（每期上限 NT$50）",
      "兆豐帳戶自動扣繳卡費成功再加 6%（每期上限 NT$50）",
      "回饋以 Gogoro Rewards 點數發放",
    ],
    sourceUrl: "https://network.gogoro.com/tw/promotions/bank-offers-summary/",
  },
  {
    id: "mega-gogoro-store",
    cardId: "mega-gogoro",
    categoryId: "general",
    title: "Gogoro 門市 / 網路商店 2%",
    description: "於 Gogoro 全台門市與線上商店刷本卡享 2% Rewards 點數。",
    rewardType: "cashback",
    rewardValue: 2,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 75,
    maxBenefitPerMonth: 1000,
    conditions: ["Gogoro 全台門市", "Gogoro 線上商店", "每期最高 NT$1,000"],
  },
  {
    id: "mega-gogoro-goshare",
    cardId: "mega-gogoro",
    categoryId: "hsr",
    title: "GoShare 騎乘 15%",
    description:
      "當期一般消費滿 NT$500 後，支付 GoShare 騎乘費用享 15% 回饋（每帳單上限 NT$100）。",
    rewardType: "cashback",
    rewardValue: 15,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 70,
    maxBenefitPerMonth: 100,
    conditions: ["當期一般消費滿 NT$500", "支付 GoShare 騎乘費", "每帳單上限 NT$100"],
  },
  {
    id: "mega-gogoro-purchase",
    cardId: "mega-gogoro",
    categoryId: "general",
    title: "Gogoro 購車 30 期 0 利率",
    description: "刷本卡購買 Gogoro 全車系享 30 期分期 0 利率。",
    rewardType: "free_service",
    needsRegistration: true,
    priorityScore: 55,
    conditions: ["限 Gogoro 購車", "30 期分期 0 利率"],
    sourceUrl: "https://promotion.gogoro.com/tw/megabank-co-brand-card-interest-free-2019/",
  },
  {
    id: "mega-gogoro-base",
    cardId: "mega-gogoro",
    categoryId: "general",
    title: "一般消費基本回饋",
    description: "一般通路刷卡基本 Rewards 點數回饋。",
    rewardType: "cashback",
    rewardValue: 1,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 25,
    conditions: ["一般刷卡"],
  },
];
