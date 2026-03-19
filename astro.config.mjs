import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "http://localhost:4321/",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel(),
});
