import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://astro-simple-blog-black.vercel.app",
  output: "static",
  integrations: [tailwind()],
});
