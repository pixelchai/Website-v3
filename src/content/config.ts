import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.date(),

    thumb: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
