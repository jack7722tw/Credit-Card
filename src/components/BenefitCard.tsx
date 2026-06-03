import Link from "next/link";
import type { RankedBenefit } from "@/lib/types";
import { CATEGORY_MAP } from "@/data/categories";

function formatReward(b: RankedBenefit): string {
  // Explicit override wins (used for ambiguous mileage ratios, discounts, etc.)
  if (b.rewardLabel) return b.rewardLabel;

  if (b.rewardValue == null) {
    if (b.rewardType === "free_service") return "免費服務";
    if (b.rewardType === "fee_waiver") return "免手續費";
    if (b.rewardType === "free_quota") return "免費";
    return "—";
  }

  const v = b.rewardValue;
  const n = v.toLocaleString();

  // Percentage-based rewards
  if (b.rewardUnit === "%") {
    switch (b.rewardType) {
      case "cashback":
        return `${v}% 回饋`;
      case "points":
        return `${v}% 點數`;
      case "miles":
        return `${v}% 哩程`;
      case "discount":
        return `${v}% 折抵`;
      default:
        return `${v}%`;
    }
  }

  // Fixed-amount and quota rewards — localise the unit
  switch (b.rewardUnit) {
    case "TWD":
      return `$${n}`;
    case "miles":
      return `${n} 哩`;
    case "points":
      return `${n} 點`;
    case "times":
      return `${n} 次`;
    case "hours":
      return `${n} 小時`;
    default:
      return n;
  }
}

export function BenefitCard({ b, showRank = false }: { b: RankedBenefit; showRank?: boolean }) {
  const cat = CATEGORY_MAP[b.categoryId];
  return (
    <article className="card-surface rounded-lg p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-[rgb(var(--muted))]">
            {showRank && (
              <span className="chip" style={{ background: "rgb(var(--accent) / 0.15)" }}>
                #{b.rank}
              </span>
            )}
            <span>{cat?.emoji} {cat?.name}</span>
            <span>·</span>
            <Link href={`/cards/${b.card.id}`} className="hover:underline">
              {b.card.bank} {b.card.name}
            </Link>
          </div>
          <h3 className="font-semibold mt-1">{b.title}</h3>
          <p className="text-sm text-[rgb(var(--muted))] mt-1">{b.description}</p>
        </div>
        <div className="text-right shrink-0">
          <div className="text-sm font-bold text-[rgb(var(--accent))]">{formatReward(b)}</div>
          {b.maxBenefitPerMonth != null && (
            <div className="text-xs text-[rgb(var(--muted))]">
              月上限 ${b.maxBenefitPerMonth.toLocaleString()}
            </div>
          )}
          {b.maxBenefitPerYear != null && (
            <div className="text-xs text-[rgb(var(--muted))]">
              年上限 ${b.maxBenefitPerYear.toLocaleString()}
            </div>
          )}
        </div>
      </div>

      {b.conditions.length > 0 && (
        <ul className="mt-3 text-sm space-y-0.5 text-[rgb(var(--muted))]">
          {b.conditions.map((c, i) => (
            <li key={i}>· {c}</li>
          ))}
        </ul>
      )}

      <div className="mt-3 flex flex-wrap gap-2 items-center text-xs">
        {b.needsRegistration && (
          <span className="chip" style={{ background: "rgb(245 158 11 / 0.18)" }}>
            ⚠️ 需登錄
          </span>
        )}
        {b.familyEligible && <span className="chip">家人可用</span>}
        {b.validUntil && (
          <span
            className="chip"
            style={
              b.isExpired
                ? { background: "rgb(239 68 68 / 0.2)" }
                : b.isExpiringSoon
                ? { background: "rgb(245 158 11 / 0.2)" }
                : undefined
            }
          >
            {b.isExpired ? "已過期" : b.isExpiringSoon ? "即將到期" : "有效期至"} {b.validUntil}
          </span>
        )}
        {b.registrationLink && (
          <a
            href={b.registrationLink}
            target="_blank"
            rel="noreferrer"
            className="text-[rgb(var(--accent))] hover:underline ml-auto"
          >
            登錄活動 ↗
          </a>
        )}
        {b.bookingLink && (
          <a
            href={b.bookingLink}
            target="_blank"
            rel="noreferrer"
            className="text-[rgb(var(--accent))] hover:underline"
          >
            線上預約 ↗
          </a>
        )}
        {b.bookingPhone && (
          <a
            href={`tel:${b.bookingPhone.replace(/[^0-9+]/g, "")}`}
            className="text-[rgb(var(--accent))] hover:underline"
          >
            ☎ 預約專線 {b.bookingPhone}
          </a>
        )}
        {b.sourceUrl && !b.registrationLink && !b.bookingLink && (
          <a
            href={b.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[rgb(var(--muted))] hover:underline ml-auto"
          >
            來源 ↗
          </a>
        )}
      </div>
      {b.notes && (
        <p className="mt-2 text-xs text-[rgb(var(--muted))] italic">備註：{b.notes}</p>
      )}
    </article>
  );
}
