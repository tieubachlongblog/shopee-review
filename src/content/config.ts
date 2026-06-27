import { defineCollection, z } from "astro:content";

// Mỗi bài review = 1 file .md trong src/content/reviews/
// AI viết draft -> sư phụ duyệt -> bỏ file vào đây -> tự lên web.
const reviews = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),                       // Tiêu đề bài (SEO)
    description: z.string(),                  // Mô tả ngắn (SEO meta)
    category: z.enum(["pc", "sach", "decor"]), // Danh mục
    productName: z.string(),                  // Tên sản phẩm
    price: z.string(),                        // Giá (vd "390.000đ")
    rating: z.number().min(1).max(5),         // Điểm đánh giá 1-5
    image: z.string(),                        // Ảnh đại diện
    affiliateUrl: z.string(),                 // Link Shopee affiliate
    pros: z.array(z.string()),                // Ưu điểm
    cons: z.array(z.string()),                // Nhược điểm
    pubDate: z.date(),                        // Ngày đăng
    featured: z.boolean().default(false),     // Bài nổi bật
  }),
});

export const collections = { reviews };
