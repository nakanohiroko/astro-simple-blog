import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://astro-simple-blog-omega.vercel.app/",
  integrations: [tailwind()],
  adapter: vercel(),
});
