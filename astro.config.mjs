import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://astro-simple-blog-omega.vercel.app/",
  integrations: [tailwind()],
});
