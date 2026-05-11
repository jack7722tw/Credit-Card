import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "信用卡權益整理工具",
  description: "輸入持有的信用卡，比較各家銀行優惠權益，依類別排名推薦",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body className="min-h-screen flex flex-col">
        <header className="border-b border-[rgb(var(--border))] bg-[rgb(var(--card))]">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-6">
            <Link href="/" className="font-bold text-lg">
              💳 卡權益
            </Link>
            <nav className="flex gap-4 text-sm text-[rgb(var(--muted))]">
              <Link href="/" className="hover:text-[rgb(var(--fg))]">我的卡片</Link>
              <Link href="/my-benefits" className="hover:text-[rgb(var(--fg))]">我的權益</Link>
              <Link href="/categories" className="hover:text-[rgb(var(--fg))]">分類瀏覽</Link>
              <Link href="/cards" className="hover:text-[rgb(var(--fg))]">所有卡片</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-5xl mx-auto px-4 py-6 w-full">{children}</main>

        <footer className="border-t border-[rgb(var(--border))] mt-8 py-4">
          <div className="max-w-5xl mx-auto px-4 text-xs text-[rgb(var(--muted))]">
            資料僅供參考，最新權益以各家銀行官網公告為準。
          </div>
        </footer>
      </body>
    </html>
  );
}
