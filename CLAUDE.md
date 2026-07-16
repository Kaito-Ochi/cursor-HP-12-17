# webサイト — プロジェクト方針

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
