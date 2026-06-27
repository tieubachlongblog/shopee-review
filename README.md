# ReviewHay — Web review affiliate Shopee

Blog review sản phẩm (linh kiện PC, sách, decor) bằng **Astro** — tối ưu SEO, deploy Vercel.

## Thêm bài review mới (quy trình AI viết + duyệt)
1. Tạo file mới trong `src/content/reviews/ten-bai.md`
2. Điền phần đầu (frontmatter) + nội dung markdown
3. Commit + push → Vercel tự build & lên web

### Mẫu frontmatter
```yaml
---
title: "Tiêu đề bài (SEO)"
description: "Mô tả ngắn cho Google"
category: "pc"          # pc | sach | decor
productName: "Tên sản phẩm"
price: "290.000đ"
rating: 4.5             # 1-5
image: "https://link-anh.jpg"
affiliateUrl: "https://shopee.vn/link-affiliate-cua-ban"
pros: ["Ưu điểm 1", "Ưu điểm 2"]
cons: ["Nhược điểm 1"]
pubDate: 2026-06-27
featured: false
---
Nội dung bài viết markdown ở đây...
```

## Chạy local
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build production -> dist/
```

## Deploy Vercel
- Framework Preset: **Astro** (Vercel tự nhận)
- Build command: `npm run build`
- Output: `dist`
- Sau khi có domain: đổi `site` trong `astro.config.mjs` cho đúng + bật lại sitemap.
