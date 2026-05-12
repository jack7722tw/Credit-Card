import type { Card, Benefit } from "@/lib/types";

// 資料來源：
// - 永豐 Green 卡活動頁：https://bank.sinopac.com/sinopacBT/webevents/2312_greencard/
// - 符碼記憶：https://www.ewdna.com/2023/12/sinopac-cash-green.html
// Last reviewed: 2026-05

export const card: Card = {
  id: "sinopac-green",
  bank: "永豐銀行",
  name: "現金回饋 Green 卡（Titanium Business）",
  nameEn: "SinoPac Cash Back Green Card",
  type: "credit",
  network: ["VISA"],
  annualFee: 0,
  annualFeeWaiver: "免年費",
  officialUrl: "https://bank.sinopac.com/sinopacBT/personal/credit-card/introduction/bankcard/cashcard.html",
  year: 2026,
  tags: ["綠色通路", "現金回饋", "悠遊卡加值"],
};

export const benefits: Benefit[] = [
  {
    id: "sinopac-green-base-domestic",
    cardId: "sinopac-green",
    categoryId: "general",
    title: "國內消費 1% 無上限",
    description: "國內一般消費享 1% 現金回饋，無金額上限。",
    rewardType: "cashback",
    rewardValue: 1,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 60,
    conditions: ["國內一般消費", "無回饋上限"],
    sourceUrl:
      "https://bank.sinopac.com/sinopacBT/personal/credit-card/introduction/bankcard/cashcard.html",
  },
  {
    id: "sinopac-green-overseas",
    cardId: "sinopac-green",
    categoryId: "overseas",
    title: "海外消費 2% 無上限",
    description: "海外實體與網購消費享 2% 現金回饋，無上限。",
    rewardType: "cashback",
    rewardValue: 2,
    rewardUnit: "%",
    needsRegistration: false,
    priorityScore: 72,
    conditions: ["海外消費依國際組織認列", "無回饋上限"],
  },
  {
    id: "sinopac-green-eco",
    cardId: "sinopac-green",
    categoryId: "general",
    title: "綠色通路 5% 加碼",
    description:
      "於指定綠色通路（餐飲、旅店、影城、售票、有機商店、UNIQLO/H&M/ZARA 等）享 5% 回饋（1% + 加碼 4%）。",
    rewardType: "cashback",
    rewardValue: 5,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 88,
    maxBenefitPerMonth: 300,
    conditions: [
      "需設定電子帳單並完成指定任務",
      "加碼 4% 每期上限 NT$300（每期最高刷 NT$7,500）",
      "餐廳：藏壽司、摩斯、築間、Q burger、麥味登",
      "旅店：捷絲旅、煙波、希爾頓、國賓",
      "影城：新光、威秀、喜樂時代",
      "售票：寬宏、KKTIX、年代、拓元",
      "有機 / 時尚：里仁、AESOP、艾瑪絲、UNIQLO、H&M、ZARA",
      "公益：荒野保護協會等",
    ],
    sourceUrl: "https://bank.sinopac.com/sinopacBT/webevents/2312_greencard/index.html",
  },
  {
    id: "sinopac-green-transit",
    cardId: "sinopac-green",
    categoryId: "hsr",
    title: "悠遊卡自動加值 4%",
    description:
      "本卡綁定悠遊卡自動加值，加值金額享 4% 現金回饋（屬綠色通路加碼，不另享 1% 基本回饋）。",
    rewardType: "cashback",
    rewardValue: 4,
    rewardUnit: "%",
    needsRegistration: true,
    priorityScore: 85,
    maxBenefitPerMonth: 300,
    conditions: [
      "需綁定悠遊卡自動加值",
      "加值回饋計入綠色通路加碼上限 NT$300/期",
      "Gogoro / Wemo / Zipcar / LINE GO 等綠色運輸亦享 5%",
      "TPASS 用戶可於捷運站感應加值機自動加值享 4%",
    ],
  },
  {
    id: "sinopac-green-new-user",
    cardId: "sinopac-green",
    categoryId: "general",
    title: "2026 新戶 / 任務刷卡金",
    description:
      "新戶完成指定消費並設定永豐 / 京城帳戶自扣繳，享 NT$200 刷卡金；首刷禮 3 選 1。",
    rewardType: "cashback",
    rewardValue: 200,
    rewardUnit: "TWD",
    needsRegistration: true,
    priorityScore: 40,
    conditions: [
      "限新戶",
      "需登錄活動 + 設定自扣繳",
      "名額上限 5,000 名",
      "首刷禮 3 選 1（購物車 / 電風扇 / NT$500 刷卡金）",
    ],
    validUntil: "2026-06-30",
  },
];
