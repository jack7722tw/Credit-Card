import Link from "next/link";
import { ALL_CARDS } from "@/data";
import { CATEGORIES } from "@/data/categories";
import { CardPicker } from "@/components/CardPicker";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold">我的信用卡</h1>
        <p className="text-sm text-[rgb(var(--muted))] mt-1">
          選取你持有的卡片，系統會幫你彙整所有權益並依類別排名推薦最佳選擇。資料儲存在你的瀏覽器中。
        </p>
      </section>

      <section>
        <CardPicker cards={ALL_CARDS} />
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">快速分類查詢</h2>
          <Link href="/categories" className="text-sm text-[rgb(var(--accent))] hover:underline">
            查看全部 →
          </Link>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CATEGORIES.slice(0, 8).map((c) => (
            <li key={c.id}>
              <Link
                href={`/categories/${c.id}`}
                className="card-surface rounded-lg p-3 block text-center hover:border-[rgb(var(--accent))] transition"
              >
                <div className="text-2xl">{c.emoji}</div>
                <div className="text-sm mt-1">{c.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
