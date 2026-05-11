import Link from "next/link";
import { ALL_CARDS, getBenefitsForCard } from "@/data";

export default function AllCardsPage() {
  const byBank = ALL_CARDS.reduce<Record<string, typeof ALL_CARDS>>((acc, c) => {
    (acc[c.bank] ||= []).push(c);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">所有卡片</h1>
        <p className="text-sm text-[rgb(var(--muted))]">
          資料庫中收錄的卡片共 {ALL_CARDS.length} 張，依銀行分類。
        </p>
      </header>

      {Object.entries(byBank).map(([bank, cards]) => (
        <section key={bank}>
          <h2 className="font-semibold mb-2">{bank}</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {cards.map((c) => {
              const count = getBenefitsForCard(c.id).length;
              return (
                <li key={c.id}>
                  <Link
                    href={`/cards/${c.id}`}
                    className="card-surface rounded-lg p-3 block hover:border-[rgb(var(--accent))] transition"
                  >
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-[rgb(var(--muted))]">
                      {count} 項權益 · 年費 {c.annualFee === 0 ? "免" : `$${c.annualFee}`}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
