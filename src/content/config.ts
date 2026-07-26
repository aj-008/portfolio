import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(), 
    stack: z.array(z.string()), 
    date: z.date(),
    featured: z.boolean().default(false),
    demoUrl: z.string().optional(),
    githubUrl: z.string().url().optional(),
    writeupUrl: z.string().optional(), 
    order: z.number().default(0), 
  }),
});

export const collections = { projects };
