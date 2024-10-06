// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages config -- see: https://docs.astro.build/en/guides/deploy/github/
  site: "https://pixelchai.com",

  // prefetch
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },

  integrations: [
    tailwind({
      // https://docs.astro.build/en/guides/integrations-guide/tailwind/#applybasestyles
      // Disable, using main.css file manually
      applyBaseStyles: false,
    }),
  ],
});
