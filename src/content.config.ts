import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { MAVZU_SLUGLARI } from './data/mavzular';

// Maqolalar: src/content/maqolalar/ ichidagi har bir .md fayl bitta maqola.
const maqolalar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/maqolalar' }),
  schema: z.object({
    sarlavha: z.string(),
    mavzu: z.enum(MAVZU_SLUGLARI),
    qisqacha: z.string(),
    sana: z.coerce.date(),
    yangilangan: z.coerce.date().optional(),
    manbalar: z
      .array(z.object({ matn: z.string(), havola: z.string().url().optional() }))
      .default([]),
    qoralama: z.boolean().default(false),
  }),
});

// Lug'at: src/content/lugat/ ichidagi har bir .md fayl bitta atama.
const lugat = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lugat' }),
  schema: z.object({
    atama: z.string(),
  }),
});

export const collections = { maqolalar, lugat };
