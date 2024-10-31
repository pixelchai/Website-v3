import { defineCollection, z } from "astro:content";

const commonSchema = {
  title: z.string(),
  subtitle: z.string(),
  date: z.date(),

  thumb: z.string().optional(),

  omitIndex: z.boolean().optional(), // do not show in collection listings
  omitBuild: z.boolean().optional(), // do not build route
  omit: z.boolean().optional(), // omits everything

  // override content with a message (used to omit content and show a WIP message instead)
  // set to 'default' to show a default WIP message
  wipMessage: z.string().optional(),

  links: z
    .array(
      z.union([
        z.object({
          title: z.string(),
          url: z.string(),
          icon: z.string().optional(),
          id: z.string().optional(),
        }),
        z.record(z.string(), z.string()),
      ]),
    )
    .optional(),
  defaultLink: z.string().optional(),
};

export const collections = {
  projects: defineCollection({
    type: "content",
    schema: z.object({
      ...commonSchema,
    }),
  }),
  articles: defineCollection({
    type: "content",
    schema: z.object({
      ...commonSchema,
    }),
  }),
};
