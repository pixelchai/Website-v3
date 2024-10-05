// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages config -- see: https://docs.astro.build/en/guides/deploy/github/
  site: "https://pixelchai.com",

  // prefetch
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
},
});
