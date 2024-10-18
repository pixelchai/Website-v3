// @ts-check
import { defineConfig } from "astro/config";
import autolinkHeadings from "rehype-autolink-headings";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages config -- see: https://docs.astro.build/en/guides/deploy/github/
  site: "https://pixelchai.com",

  compressHTML: true,

  // prefetch
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },

  integrations: [],
  vite: {
    css: {
      devSourcemap: false,
      transformer: "postcss",
    },
  },
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
