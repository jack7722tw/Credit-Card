# 信用卡權益整理工具

輸入你持有的信用卡，自動彙整各家銀行優惠權益，依類別瀏覽、排名推薦最佳選擇。

## 功能

- **我的卡片** — 從卡片清單勾選你持有的卡，狀態存在瀏覽器（localStorage）
- **我的權益** — 一次看完所有持有卡片的權益，可依類別篩選
- **分類瀏覽** — 停車、機場貴賓室、機場接送、餐飲、加油、行動支付等 16 大類，每類自動排名推薦
- **卡片詳情** — 單張卡片所有權益、年費、官方連結
- **AI 即時查詢**（選用）— 資料庫沒有的卡，可呼叫 Claude API 即時查詢

## 線上版本

部署在 GitHub Pages：<https://jack7722tw.github.io/Credit-Card/>

推到 `main` 或 `claude/credit-card-benefits-tool-0nNrf` 分支會自動重新部署
（GitHub Actions：`.github/workflows/deploy.yml`）。

## 本機開發

```bash
npm install
npm run dev
```

打開 <http://localhost:3000>。

## 加入新卡片

每張卡片是一個獨立檔案，方便維護與貢獻：

1. 在 `src/data/cards/` 新增 `your-card.ts`，匯出 `card` 與 `benefits`
2. 在 `src/data/index.ts` 加入 import
3. `npm run dev` 立刻看到結果

範例參考 `src/data/cards/cathay-cube.ts`。

## 資料結構

- `src/lib/types.ts` — 卡片、權益、類別的 TypeScript 型別
- `src/data/categories.ts` — 16 大類別定義
- `src/data/cards/*.ts` — 每張卡片的資料檔
- `src/lib/ranking.ts` — 排名邏輯（priorityScore + 回饋率 + 持卡加分）

### 排名公式

```
score = priorityScore (0-100)
      + (現金回饋% × 5)
      + (持卡 ? 50 : 0)
      - (已過期 ? 200 : 0)
      - (需要登錄 ? 5 : 0)
```

## 重要免責聲明

資料僅供參考。各家銀行權益隨時調整，最新優惠請以**銀行官網公告為準**。
此工具不對任何金融決策負責。
