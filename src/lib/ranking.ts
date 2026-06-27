import type { Benefit, Card, RankedBenefit } from "./types";
import { CARD_MAP } from "@/data";

const SOON_DAYS = 30;
const DAY_MS = 86400_000;

/**
 * Parse a "YYYY-MM-DD" validUntil as the END of that day in the viewer's
 * local time. `new Date("2026-06-30")` is UTC midnight (~08:00 in Taiwan),
 * which would wrongly mark a benefit expired on the morning of its last valid
 * day. Appending a local end-of-day time keeps it valid through that whole day.
 */
function expiryInstant(validUntil: string): number {
  return new Date(`${validUntil}T23:59:59`).getTime();
}

export function isExpired(b: Benefit, now = new Date()): boolean {
  if (!b.validUntil) return false;
  return expiryInstant(b.validUntil) < now.getTime();
}

export function isExpiringSoon(b: Benefit, now = new Date()): boolean {
  if (!b.validUntil) return false;
  const diff = expiryInstant(b.validUntil) - now.getTime();
  return diff > 0 && diff < SOON_DAYS * DAY_MS;
}

/**
 * Score a benefit for ranking. Higher = better.
 * Combines author-provided priorityScore, reward rate, and freshness.
 *
 * Only cashback / points percentages are treated as directly comparable
 * "rates" — a discount % (e.g. 6 折 = 40% off) or a mileage bonus % is NOT
 * the same kind of value and must not get the rate bonus. The bonus is also
 * capped so a single headline promo cannot dominate structurally better cards.
 */
export function scoreBenefit(b: Benefit, owned: boolean): number {
  let score = b.priorityScore ?? 0;
  const isRate = b.rewardType === "cashback" || b.rewardType === "points";
  if (isRate && b.rewardUnit === "%" && typeof b.rewardValue === "number") {
    score += Math.min(b.rewardValue, 12) * 4; // 1% ≈ 4 pts, capped at 12%
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

  // Deterministic ordering: score, then reward value, then id as a stable
  // tiebreaker so equal-priority benefits never reshuffle between renders.
  enriched.sort(
    (a, b) =>
      b._score - a._score ||
      (b.rewardValue ?? 0) - (a.rewardValue ?? 0) ||
      a.id.localeCompare(b.id),
  );
  enriched.forEach((b, i) => {
    b.rank = i + 1;
  });
  return enriched;
}
