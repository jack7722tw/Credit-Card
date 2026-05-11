import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { ALL_BENEFITS } from "@/data";

export default function CategoriesIndexPage() {
  const counts = ALL_BENEFITS.reduce<Record<string, number>>((acc, b) => {
    acc[b.categoryId] = (acc[b.categoryId] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">分類瀏覽</h1>
        <p className="text-sm text-[rgb(var(--muted))]">挑一個類別，看哪幾張卡有對應權益、條件、推薦排序。</p>
      </header>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {CATEGORIES.map((c) => (
          <li key={c.id}>
            <Link
              href={`/categories/${c.id}`}
              className="card-surface rounded-lg p-4 block hover:border-[rgb(var(--accent))] transition"
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">{c.emoji}</div>
                <div className="flex-1">
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-xs text-[rgb(var(--muted))]">{c.description}</div>
                </div>
                <div className="text-sm text-[rgb(var(--muted))]">{counts[c.id] ?? 0}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
