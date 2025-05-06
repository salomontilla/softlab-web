import { defineCollection, z } from "astro:content";

const autorSchema = z.object({
  img_autor: z.string(),
  autor: z.string(),
  programa: z.string(),
  modalidad: z.string(),
  social: z.record(z.string(), z.string()).optional().nullable().default({}), 
});

const proyectos = defineCollection({
  schema: z.object({
    autores: z.record(autorSchema),
    img_producto: z.string(),
    nombre_producto: z.string(),
    descripcion: z.string(),
    tecnologias: z.record(z.string(), z.string()),
  }),
});

export const collections = { proyectos };