// @ts-check
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import { site } from "./src/data/consts";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages config -- see: https://docs.astro.build/en/guides/deploy/github/
  site: site.url,
  base: site.base,

  compressHTML: true,

  // prefetch
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  devToolbar: { enabled: false },

  integrations: [mdx()],

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

  vite: {
    css: {
      devSourcemap: false,
      transformer: "postcss",
    },
  },
});
