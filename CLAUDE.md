# Edge Hub コーポレートサイト — プロジェクト方針

## 公開・デプロイ運用（2026/07/17確立）

- 公開URL: **https://edge-hub.net**（www は 308 で edge-hub.net へ転送）
- 経路: このリポジトリの `main` に push → Vercel プロジェクト `ehhp` が自動デプロイ（1〜2分で本番反映）
- **編集後のコミット＆pushは自動で行ってよい**（ユーザー承認済み・2026/07/17）。ただし：
  - 軽微な修正（文言・画像・イベント追加）→ main へ直接 push
  - 大きめの変更（ページ追加・デザイン変更）→ ブランチ + Vercel プレビューで確認後にマージ
- コミットメッセージは日本語

## 触ってはいけないファイル

- `image-slot.js` と `image-slots.state.json` — `<image-slot>` 要素の画像表示に必須。
  消すとトップの写真コラージュ等が表示されなくなる（画像データはstate.json内にdata URLで埋め込み）
- メール関連のDNS（Squarespace側のTXT/MXレコード）はこのリポジトリ外だが、
  ドメイン edge-hub.net は Google Workspace のメールと共用なので DNS 変更時は要注意

## ページ追加時のチェックリスト

- meta description / canonical / OGP タグを既存ページに倣って入れる（URLは https://edge-hub.net 基準）
- `sitemap.xml` に URL を追加（日本語ファイル名はURLエンコード）
- ナビゲーション・フッターのリンクを更新

## レイアウト方針（全ページ共通・今後作成するページも含む）

- **横幅はフルブリード**：各セクションのコンテナは中央寄せの最大幅キャップを設けない（`max-width: none`）。
  要素は画面の両端まで引き伸ばす。
- **ガター（左右余白）は少しだけ残す**：端に文字が貼り付かないよう、各コンテナの
  `padding-inline` は `clamp(24px, 4vw, 72px)` を基準にする。完全なゼロ余白にはしない。
- 該当コンテナ例：`.header-inner` / `.hero-inner` / `.services-inner` / `.results-inner` /
  `.companies-inner` / `.faq-inner` / `.cta-inner` / `.footer-inner` / `.fb-inner` /
  `.sv-inner` / `.sv-footer-inner`。新しいセクションも同じ規則に従う。

## ヒーローの上部余白

- ヒーローセクションは上部にゆとりを持たせて下げる（`padding-top` を大きめに取る）。
  ヘッダー以外の他セクションには、この目的での追加余白は入れない。
