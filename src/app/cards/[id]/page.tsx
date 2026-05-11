import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_CARDS, getCard, getBenefitsForCard } from "@/data";
import { rankBenefits } from "@/lib/ranking";
import { BenefitCard } from "@/components/BenefitCard";

export function generateStaticParams() {
  return ALL_CARDS.map((c) => ({ id: c.id }));
}

export default async function CardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const card = getCard(id);
  if (!card) notFound();

  const benefits = getBenefitsForCard(card.id);
  const ranked = rankBenefits(benefits);

  return (
    <div className="space-y-6">
      <header className="card-surface rounded-lg p-5">
        <Link href="/cards" className="text-sm text-[rgb(var(--muted))] hover:underline">
          ← 所有卡片
        </Link>
        <div className="text-sm text-[rgb(var(--muted))] mt-2">{card.bank}</div>
        <h1 className="text-2xl font-bold">{card.name}</h1>
        {card.nameEn && <div className="text-sm text-[rgb(var(--muted))]">{card.nameEn}</div>}

        <dl className="grid sm:grid-cols-2 gap-2 mt-4 text-sm">
          <div>
            <dt className="text-[rgb(var(--muted))] text-xs">卡別</dt>
            <dd>{card.network.join(" / ")}</dd>
          </div>
          <div>
            <dt className="text-[rgb(var(--muted))] text-xs">年費</dt>
            <dd>
              {card.annualFee === 0 ? "免年費" : `$${card.annualFee}`}
              {card.annualFeeWaiver && (
                <span className="text-[rgb(var(--muted))] ml-2">（{card.annualFeeWaiver}）</span>
              )}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-[rgb(var(--muted))] text-xs">官方頁面</dt>
            <dd>
              <a
                href={card.officialUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[rgb(var(--accent))] hover:underline"
              >
                {card.officialUrl} ↗
              </a>
            </dd>
          </div>
        </dl>

        <div className="mt-3 flex flex-wrap gap-1">
          {(card.tags ?? []).map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </header>

      <section>
        <h2 className="text-lg font-semibold mb-3">所有權益（{benefits.length}）</h2>
        <div className="grid gap-3">
          {ranked.map((b) => (
            <BenefitCard key={b.id} b={b} />
          ))}
          {ranked.length === 0 && (
            <p className="text-sm text-[rgb(var(--muted))]">這張卡尚未收錄權益資料。</p>
          )}
        </div>
      </section>
    </div>
  );
}
