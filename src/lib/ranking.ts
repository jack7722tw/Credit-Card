import type { Benefit, Card, RankedBenefit } from "./types";
import { CARD_MAP } from "@/data";

const SOON_DAYS = 30;

export function isExpired(b: Benefit, now = new Date()): boolean {
  if (!b.validUntil) return false;
  return new Date(b.validUntil) < now;
}

export function isExpiringSoon(b: Benefit, now = new Date()): boolean {
  if (!b.validUntil) return false;
  const end = new Date(b.validUntil);
  const diff = end.getTime() - now.getTime();
  return diff > 0 && diff < SOON_DAYS * 86400_000;
}

/**
 * Score a benefit for ranking. Higher = better.
 * Combines author-provided priorityScore, raw reward value, and freshness.
 */
export function scoreBenefit(b: Benefit, owned: boolean): number {
  let score = b.priorityScore ?? 0;
  if (b.rewardUnit === "%" && typeof b.rewardValue === "number") {
    score += b.rewardValue * 5; // 1% adds 5 points
  }
  if (owned) score += 50;
  if (isExpired(b)) score -= 200;
  if (b.needsRegistration) score -= 5;
  return score;
}

export function rankBenefits(
  benefits: Benefit[],
  ownedCardIds: Set<string> = new Set(),
): RankedBenefit[] {
  const enriched = benefits
    .map((b) => {
      const card = CARD_MAP[b.cardId];
      return card
        ? {
            ...b,
            card,
            rank: 0,
            isExpired: isExpired(b),
            isExpiringSoon: isExpiringSoon(b),
            _score: scoreBenefit(b, ownedCardIds.has(b.cardId)),
          }
        : null;
    })
    .filter(Boolean) as (RankedBenefit & { _score: number })[];

  enriched.sort((a, b) => b._score - a._score);
  enriched.forEach((b, i) => {
    b.rank = i + 1;
  });
  return enriched;
}
