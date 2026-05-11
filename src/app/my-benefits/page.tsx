"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ALL_BENEFITS, CARD_MAP } from "@/data";
import { CATEGORIES, CATEGORY_MAP } from "@/data/categories";
import { rankBenefits } from "@/lib/ranking";
import { useOwnedCards } from "@/lib/userCards";
import { BenefitCard } from "@/components/BenefitCard";

export default function MyBenefitsPage() {
  const { owned, ownedSet } = useOwnedCards();
  const [filterCat, setFilterCat] = useState<string>("");

  const ranked = useMemo(() => {
    const mine = ALL_BENEFITS.filter((b) => ownedSet.has(b.cardId));
    return rankBenefits(mine, ownedSet);
  }, [ownedSet]);

  const filtered = useMemo(
    () => (filterCat ? ranked.filter((b) => b.categoryId === filterCat) : ranked),
    [ranked, filterCat],
  );

  if (owned.length === 0) {
    return (
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">我的權益</h1>
        <p className="text-sm text-[rgb(var(--muted))]">
          你還沒有選擇任何卡片。
          <Link href="/" className="text-[rgb(var(--accent))] hover:underline ml-1">
            去選卡片 →
          </Link>
        </p>
      </div>
    );
  }

  const presentCats = Array.from(new Set(ranked.map((r) => r.categoryId)));

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">我的權益 <span className="text-sm font-normal text-[rgb(var(--muted))]">({ranked.length})</span></h1>
        <p className="text-sm text-[rgb(var(--muted))]">
          {owned.length} 張卡 · {owned.map((id) => CARD_MAP[id]?.name).filter(Boolean).join("、")}
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilterCat("")}
          className={`btn ${filterCat === "" ? "btn-primary" : "btn-outline"}`}
        >
          全部
        </button>
        {CATEGORIES.filter((c) => presentCats.includes(c.id)).map((c) => (
          <button
            key={c.id}
            onClick={() => setFilterCat(c.id)}
            className={`btn ${filterCat === c.id ? "btn-primary" : "btn-outline"}`}
          >
            {c.emoji} {c.name}
          </button>
        ))}
      </div>

      <div className="grid gap-3">
        {filtered.map((b) => (
          <BenefitCard key={b.id} b={b} showRank />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-sm text-[rgb(var(--muted))]">這個類別沒有權益。</p>
      )}
    </div>
  );
}
