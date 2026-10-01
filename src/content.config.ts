import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

// Contrato do cabeçalho de cada guia. CMS, site, corpus da Clara e o botão "?"
// do sistema leem estes campos; mudar um nome aqui é mudar nos quatro.
export const guideFields = z.object({
  secao: z.string().optional(),
  telas: z.array(z.string()).default([]),
  quem: z.array(z.enum(["gestor", "corretor", "financeiro"])).default([]),
  funcionalidade: z.string().optional(),
  video: z.string().optional(),
  verificado_em: z.coerce.date().optional(),
  versao_sistema: z.string().optional(),
  trilha: z.boolean().default(false),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: guideFields }),
  }),
  videos: defineCollection({
    loader: glob({ pattern: "**/*.yaml", base: "./src/content/videos" }),
    schema: z.object({
      youtube_id: z.string(),
      duracao: z.string().regex(/^\d{1,2}:\d{2}$/),
      verificado_em: z.coerce.date(),
      capitulos: z
        .array(z.object({ t: z.string().regex(/^\d{1,2}:\d{2}$/), assunto: z.string() }))
        .min(1),
    }),
  }),
  transcricoes: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/transcricoes" }),
    schema: z.object({
      video: z.string(),
      revisada: z.boolean().default(false),
    }),
  }),
};
