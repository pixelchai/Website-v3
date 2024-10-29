import { defineCollection, z } from "astro:content";

const commonSchema = {
  title: z.string(),
  subtitle: z.string(),
  date: z.date(),

  thumb: z.string().optional(),
  draft: z.boolean().optional(),
  links: z
    .array(
      z.object({
        title: z.string(),
        url: z.string(),
        icon: z.string().optional(),
      }),
    )
    .optional(),
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
