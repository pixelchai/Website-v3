import { defineCollection, z } from "astro:content";

const commonSchema = {
  title: z.string(),
  subtitle: z.string(),
  date: z.date(),

  thumb: z.string().optional(),
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
