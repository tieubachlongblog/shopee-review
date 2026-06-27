import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// site dùng cho sitemap + canonical. Đổi nếu sau này mua domain riêng.
export default defineConfig({
  site: "https://shopee-review.vercel.app",
  integrations: [sitemap()],
});
