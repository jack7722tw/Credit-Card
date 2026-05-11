"use client";

import { useMemo, useState } from "react";
import type { Card } from "@/lib/types";
import { useOwnedCards } from "@/lib/userCards";

export function CardPicker({ cards }: { cards: Card[] }) {
  const { ownedSet, toggle } = useOwnedCards();
  const [query, setQuery] = useState("");
  const [bank, setBank] = useState<string>("");

  const banks = useMemo(
    () => Array.from(new Set(cards.map((c) => c.bank))).sort(),
    [cards],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cards.filter((c) => {
      if (bank && c.bank !== bank) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.bank.toLowerCase().includes(q) ||
        (c.nameEn?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [cards, query, bank]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="搜尋卡名 / 銀行..."
          className="card-surface px-3 py-2 rounded-md text-sm flex-1 min-w-[180px]"
        />
        <select
          value={bank}
          onChange={(e) => setBank(e.target.value)}
          className="card-surface px-3 py-2 rounded-md text-sm"
        >
          <option value="">所有銀行</option>
          {banks.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <ul className="grid gap-2 sm:grid-cols-2">
        {filtered.map((c) => {
          const isOwned = ownedSet.has(c.id);
          return (
            <li key={c.id}>
              <button
                onClick={() => toggle(c.id)}
                className={`w-full text-left card-surface rounded-lg p-3 transition ${
                  isOwned ? "ring-2 ring-[rgb(var(--accent))]" : "hover:border-[rgb(var(--accent))]"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="text-xs text-[rgb(var(--muted))]">{c.bank}</div>
                    <div className="font-medium">{c.name}</div>
                    {c.nameEn && (
                      <div className="text-xs text-[rgb(var(--muted))]">{c.nameEn}</div>
                    )}
                    <div className="mt-1 flex flex-wrap gap-1">
                      {(c.tags ?? []).map((t) => (
                        <span key={t} className="chip">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className={`text-sm ${isOwned ? "text-[rgb(var(--accent))]" : "text-[rgb(var(--muted))]"}`}>
                    {isOwned ? "✓ 已選" : "+ 加入"}
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
      {filtered.length === 0 && (
        <p className="text-sm text-[rgb(var(--muted))]">沒有符合的卡片。</p>
      )}
    </div>
  );
}
