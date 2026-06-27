import { defineConfig } from "astro/config";

// ⚠️ Đổi 'site' thành domain thật khi deploy (vd https://review-cua-ban.vercel.app)
// Sitemap: bật lại sau khi deploy có domain thật (npx astro add sitemap).
export default defineConfig({
  site: "https://shopee-review-demo.vercel.app",
});
