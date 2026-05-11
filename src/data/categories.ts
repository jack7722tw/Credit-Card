import type { Category } from "@/lib/types";

export const CATEGORIES: Category[] = [
  { id: "parking", name: "停車", emoji: "🅿️", description: "市區停車場、百貨停車折抵" },
  { id: "airport_lounge", name: "機場貴賓室", emoji: "🛋️", description: "Priority Pass、龍騰、環亞貴賓室" },
  { id: "airport_transfer", name: "機場接送", emoji: "🚗", description: "桃園/松山/小港機場接送" },
  { id: "travel_insurance", name: "旅遊不便險", emoji: "🛫", description: "班機延誤、行李延誤/遺失保障" },
  { id: "dining", name: "餐飲", emoji: "🍽️", description: "餐廳、咖啡、外送平台回饋" },
  { id: "gas", name: "加油", emoji: "⛽", description: "中油、台塑加油站回饋" },
  { id: "supermarket", name: "超市賣場", emoji: "🛒", description: "全聯、家樂福、好市多" },
  { id: "streaming", name: "影音串流", emoji: "📺", description: "Netflix、Spotify、YouTube Premium" },
  { id: "ecommerce", name: "電商網購", emoji: "📦", description: "蝦皮、momo、PChome" },
  { id: "mobile_payment", name: "行動支付", emoji: "📱", description: "Apple Pay、Google Pay、LINE Pay、街口" },
  { id: "overseas", name: "國外消費", emoji: "🌏", description: "海外刷卡、免手續費、外幣回饋" },
  { id: "general", name: "一般消費", emoji: "💳", description: "無類別限制的回饋" },
  { id: "hsr", name: "高鐵 / 交通", emoji: "🚄", description: "高鐵票、台鐵、客運" },
  { id: "roadside", name: "道路救援", emoji: "🛠️", description: "免費拖吊、緊急救援次數" },
  { id: "golf", name: "高爾夫", emoji: "⛳", description: "果嶺費優惠、練習場" },
  { id: "health", name: "健身 / 醫療", emoji: "💪", description: "健身房、健檢、醫美" },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c]),
) as Record<Category["id"], Category>;
