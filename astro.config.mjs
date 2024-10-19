// @ts-check
import { defineConfig } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import m2dx from "astro-m2dx";
import { site } from "./src/data/consts";

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

  integrations: [mdx()],
  vite: {
    css: {
      devSourcemap: false,
      transformer: "postcss",
    },
  },
  markdown: {
    remarkPlugins: [[m2dx, {}]],
    rehypePlugins: [
      // heading ids
      rehypeHeadingIds,

      // autolink headings
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
