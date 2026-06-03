// ---- Core domain types ----

export type CategoryId =
  | "parking"
  | "airport_lounge"
  | "airport_transfer"
  | "travel_insurance"
  | "dining"
  | "gas"
  | "supermarket"
  | "streaming"
  | "ecommerce"
  | "mobile_payment"
  | "overseas"
  | "general"
  | "hsr"
  | "roadside"
  | "golf"
  | "health";

export interface Category {
  id: CategoryId;
  name: string;
  emoji: string;
  description: string;
}

export type RewardType =
  | "cashback"
  | "points"
  | "miles"
  | "discount"
  | "free_service"
  | "fee_waiver"
  | "free_quota";

export type RewardUnit = "%" | "TWD" | "miles" | "points" | "times" | "hours";

export type CardNetwork = "VISA" | "Master" | "JCB" | "UnionPay" | "AmEx";

export interface Card {
  id: string;
  bank: string;
  name: string;
  nameEn?: string;
  type: "credit" | "debit" | "prepaid";
  network: CardNetwork[];
  annualFee: number;
  annualFeeWaiver?: string;
  officialUrl: string;
  year: number;
  tags?: string[];
}

export interface Benefit {
  id: string;
  cardId: string;
  categoryId: CategoryId;
  title: string;
  description: string;

  // when this offering is valid
  validFrom?: string; // YYYY-MM-DD
  validUntil?: string; // YYYY-MM-DD

  // reward shape
  rewardType: RewardType;
  rewardValue?: number;
  rewardUnit?: RewardUnit;
  /**
   * Explicit display string for the reward badge. Overrides the value/unit
   * auto-format. Use when value/unit alone would be ambiguous, e.g. a mileage
   * ratio ("20元/哩"), a flight bonus ("搭機 +50%"), or a discount ("9折").
   */
  rewardLabel?: string;

  // limits
  maxBenefitPerMonth?: number;
  maxBenefitPerYear?: number;
  minSpend?: number;

  // activation
  needsRegistration: boolean;
  registrationLink?: string;

  // travel-related
  familyEligible?: boolean;
  bookingLink?: string;
  bookingPhone?: string;

  // ranking helpers
  priorityScore: number; // 0-100

  conditions: string[];
  notes?: string;
  sourceUrl?: string;
}

// ---- UI helpers ----

export interface RankedBenefit extends Benefit {
  card: Card;
  rank: number;
  isExpired: boolean;
  isExpiringSoon: boolean;
}
