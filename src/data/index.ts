import type { Card, Benefit } from "@/lib/types";
// User's own cards
import * as ctbcAna from "./cards/ctbc-ana";
import * as ctbcCal from "./cards/ctbc-cal";
import * as esunWorld from "./cards/esun-world";
import * as esunDajiang from "./cards/esun-dajiang";
import * as esunUbear from "./cards/esun-ubear";
import * as sinopacGreen from "./cards/sinopac-green";
import * as dbsEco from "./cards/dbs-eco";
import * as fubonJ from "./cards/fubon-j";
import * as fubonMomo from "./cards/fubon-momo";
import * as fubonCostco from "./cards/fubon-costco";
import * as taishinRichart from "./cards/taishin-richart";
import * as megaGogoro from "./cards/mega-gogoro";

const MODULES = [
  ctbcAna,
  ctbcCal,
  esunWorld,
  esunDajiang,
  esunUbear,
  sinopacGreen,
  dbsEco,
  fubonJ,
  fubonMomo,
  fubonCostco,
  taishinRichart,
  megaGogoro,
];

export const ALL_CARDS: Card[] = MODULES.map((m) => m.card);
export const ALL_BENEFITS: Benefit[] = MODULES.flatMap((m) => m.benefits);

export const CARD_MAP: Record<string, Card> = Object.fromEntries(
  ALL_CARDS.map((c) => [c.id, c]),
);

export function getCard(id: string): Card | undefined {
  return CARD_MAP[id];
}

export function getBenefitsForCard(cardId: string): Benefit[] {
  return ALL_BENEFITS.filter((b) => b.cardId === cardId);
}

export function getBenefitsForCategory(categoryId: string): Benefit[] {
  return ALL_BENEFITS.filter((b) => b.categoryId === categoryId);
}

export function listBanks(): string[] {
  return Array.from(new Set(ALL_CARDS.map((c) => c.bank))).sort();
}
