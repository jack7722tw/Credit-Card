import Link from "next/link";
import type { RankedBenefit } from "@/lib/types";
import { CATEGORY_MAP } from "@/data/categories";

function formatReward(b: RankedBenefit): string {
  if (b.rewardValue == null) {
    if (b.rewardType === "free_service") return "免費服務";
    if (b.rewardType === "fee_waiver") return "免手續費";
    return "—";
  }
  const u = b.rewardUnit ?? "";
  switch (b.rewardType) {
    case "cashback":
      return `${b.rewardValue}${u} 現金回饋`;
    case "points":
      return `${b.rewardValue}${u} 點數`;
    case "miles":
      return `${b.rewardValue} 哩`;
    case "discount":
      return `${b.rewardValue}${u} 折扣`;
    case "free_quota":
      return `${b.rewardValue} ${u}`;
    default:
      return `${b.rewardValue}${u}`;
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
            <div className="text-xs text-[rgb(var(--muted))]">月上限 ${b.maxBenefitPerMonth}</div>
          )}
          {b.maxBenefitPerYear != null && (
            <div className="text-xs text-[rgb(var(--muted))]">年上限 ${b.maxBenefitPerYear}</div>
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
            預約 ↗
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
