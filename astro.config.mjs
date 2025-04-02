import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://astro-simple-blog-black.vercel.app",
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare(),
});
