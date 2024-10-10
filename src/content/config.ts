import { defineCollection, z } from "astro:content";

const commonSchema = {
  title: z.string(),
  subtitle: z.string(),
  date: z.date(),

  thumb: z.string().optional(),
};

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    ...commonSchema,
  }),
});

export const collections = {
  projects: projectsCollection,
};
