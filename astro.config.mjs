// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import { site } from "./src/data/consts";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

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

  image: {
    service: sharpImageService({
      limitInputPixels: 100000000000, // see issue #14
    }),
  },

  devToolbar: { enabled: false },

  integrations: [mdx()],

  markdown: {
    remarkPlugins: [remarkMath],
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
      rehypeKatex,
    ],
  },

  vite: {
    css: {
      devSourcemap: false,
      transformer: "postcss",
    },
  },

  redirects: {
    "/tmpredirect": "/articles/answerbot/",

    "/projects/answerbot": `${site.base}/articles/answerbot/`,
    "/web/rgxc": `${site.base}/articles/rgxc/`,
  },
});
