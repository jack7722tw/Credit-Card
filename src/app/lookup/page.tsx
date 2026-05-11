"use client";

import { useState } from "react";

export default function LookupPage() {
  const [bank, setBank] = useState("");
  const [cardName, setCardName] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<unknown>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/lookup", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ bank, cardName, category }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "未知錯誤");
      } else {
        setResult(data);
      }
    } catch (err) {
      setError(String(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">AI 即時查詢</h1>
        <p className="text-sm text-[rgb(var(--muted))]">
          資料庫沒有的卡？輸入銀行與卡名，由 Claude 即時搜尋並彙整最新權益。
        </p>
      </header>

      <form onSubmit={onSubmit} className="card-surface rounded-lg p-4 space-y-3">
        <div className="grid sm:grid-cols-2 gap-3">
          <input
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            placeholder="銀行（例：國泰世華）"
            className="card-surface px-3 py-2 rounded-md text-sm"
          />
          <input
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="卡名（例：CUBE 卡）"
            required
            className="card-surface px-3 py-2 rounded-md text-sm"
          />
        </div>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="特別關注的類別（選填，例：機場貴賓室）"
          className="card-surface px-3 py-2 rounded-md text-sm w-full"
        />
        <button type="submit" disabled={loading} className="btn btn-primary">
          {loading ? "查詢中..." : "送出查詢"}
        </button>
      </form>

      {error && (
        <div className="card-surface rounded-lg p-4 border-red-500/50 text-sm text-red-500">
          {error}
        </div>
      )}

      {result != null && (
        <pre className="card-surface rounded-lg p-4 overflow-x-auto text-xs">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
