import { defineCollection, z } from "astro:content"; //Zod es una libreria para validar schemas en este caso los proyectos

const proyectos = defineCollection({
    schema: z.object({
        img_autor: z.string(),
        autor: z.string(),
        programa: z.string(),
        modalidad: z.string(),
        social:z.object({
            linkedIn: z.string().url(),
            github: z.string().url(),
            facebook: z.string().url(),
        }),
        img_producto: z.string(),
        nombre_producto: z.string(),
        tecnologias: z.object({
            java: z.string(),
            html: z.string(),
            laravel: z.string(),
            css: z.string()
        }),
    })
})
export const collections = {proyectos}