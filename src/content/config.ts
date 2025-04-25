import { defineCollection, z } from "astro:content"; //Zod es una libreria para validar schemas en este caso los proyectos

const proyectos = defineCollection({
    schema: z.object({
        img_autor: z.string(),
        autor: z.string(),
        programa: z.string(),
        modalidad: z.string(),
        social: z.record(z.string(), z.string()),
        img_producto: z.string(),
        nombre_producto: z.string(),
        descripcion: z.string(),
        tecnologias: z.record(z.string(), z.string()),
    })
})
export const collections = {proyectos}