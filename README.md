# Edge Hub コーポレートサイト

株式会社 Edge Hub のコーポレートサイト（静的HTML）。Claude Design で制作したデザインをそのまま配信しています。

## 構成

```
├── index.html                    # トップページ
├── 会社概要.html
├── スケジュール.html
├── ギャラリー.html
├── AIX人材コミュニティ.html
├── 対面型新卒採用イベント.html
├── 採用マーケティング支援.html
├── privacy-policy.html
├── css/                          # スタイルシート
├── js/motion.js                  # スクロールアニメーション
├── image-slot.js                 # <image-slot> カスタム要素（画像表示に必須）
├── image-slots.state.json       # 画像スロットのデータ（data URL埋め込み・必須）
├── assets/                       # 画像素材
├── fonts/                        # Noto Sans JP
└── uploads/                      # HTMLから参照される画像
```

## デプロイ

- ビルド不要の静的サイト。push すると Vercel が自動デプロイする。
- `image-slot.js` と `image-slots.state.json` は一部画像の表示に必須のため削除しないこと。

## ローカル確認

```bash
python3 -m http.server 8000
```
