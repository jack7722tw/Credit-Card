"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ALL_BENEFITS } from "@/data";
import { CATEGORY_MAP } from "@/data/categories";
import { rankBenefits } from "@/lib/ranking";
import { useOwnedCards } from "@/lib/userCards";
import { BenefitCard } from "@/components/BenefitCard";

export function CategoryDetailClient({ id }: { id: string }) {
  const { ownedSet } = useOwnedCards();
  const cat = CATEGORY_MAP[id as keyof typeof CATEGORY_MAP];

  const ranked = useMemo(() => {
    const inCat = ALL_BENEFITS.filter((b) => b.categoryId === id);
    return rankBenefits(inCat, ownedSet);
  }, [id, ownedSet]);

  if (!cat) {
    return (
      <div>
        <p>類別不存在。</p>
        <Link href="/categories" className="text-[rgb(var(--accent))] hover:underline">
          ← 返回分類
        </Link>
      </div>
    );
  }

  const owned = ranked.filter((r) => ownedSet.has(r.cardId));
  const others = ranked.filter((r) => !ownedSet.has(r.cardId));

  return (
    <div className="space-y-6">
      <header>
        <Link href="/categories" className="text-sm text-[rgb(var(--muted))] hover:underline">
          ← 全部分類
        </Link>
        <h1 className="text-2xl font-bold mt-1">
          {cat.emoji} {cat.name}
        </h1>
        <p className="text-sm text-[rgb(var(--muted))]">{cat.description}</p>
      </header>

      {owned.length > 0 && (
        <section>
          <h2 className="font-semibold text-sm text-[rgb(var(--muted))] mb-2">
            ✨ 推薦使用（你已持有）
          </h2>
          <div className="grid gap-3">
            {owned.map((b) => (
              <BenefitCard key={b.id} b={b} showRank />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-semibold text-sm text-[rgb(var(--muted))] mb-2">
          {owned.length > 0 ? "其他可考慮的卡片" : "全部相關權益"}
        </h2>
        <div className="grid gap-3">
          {others.map((b) => (
            <BenefitCard key={b.id} b={b} showRank />
          ))}
        </div>
        {ranked.length === 0 && (
          <p className="text-sm text-[rgb(var(--muted))]">
            這個類別目前沒有任何卡片資料。
          </p>
        )}
      </section>
    </div>
  );
}
