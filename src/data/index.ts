import type { Card, Benefit } from "@/lib/types";
import * as cathayCube from "./cards/cathay-cube";
import * as esunPi from "./cards/esun-pi";
import * as taishinFlygo from "./cards/taishin-flygo";
import * as ctbcLinepay from "./cards/ctbc-linepay";
import * as sinopacDawho from "./cards/sinopac-dawho";

const MODULES = [cathayCube, esunPi, taishinFlygo, ctbcLinepay, sinopacDawho];

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
