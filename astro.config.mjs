// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import autolinkHeadings from "rehype-autolink-headings";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

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
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            ariaHidden: true,
            tabIndex: -1,
          },
        },
      ],
    ],
  },
});
