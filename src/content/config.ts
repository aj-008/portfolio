import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(), // one-line "what it is"
    stack: z.array(z.string()), // tech badges
    date: z.date(),
    featured: z.boolean().default(false),
    demoUrl: z.string().optional(),
    githubUrl: z.string().url().optional(),
    writeupUrl: z.string().optional(), // e.g. link to paper PDF
    order: z.number().default(0), // manual sort control
  }),
});

export const collections = { projects };
