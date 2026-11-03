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
    // O vídeo fica no YouTube (`youtube_id`) ou no Google Drive (`drive_id`,
    // arquivo compartilhado com "qualquer pessoa com o link"). Capítulos só
    // funcionam no YouTube, que aceita começar num minuto; no Drive, ficam vazios.
    schema: z
      .object({
        youtube_id: z.string().optional(),
        drive_id: z.string().optional(),
        duracao: z.string().regex(/^\d{1,2}:\d{2}$/),
        verificado_em: z.coerce.date(),
        capitulos: z
          .array(z.object({ t: z.string().regex(/^\d{1,2}:\d{2}$/), assunto: z.string() }))
          .default([]),
      })
      .refine((v) => Boolean(v.youtube_id) !== Boolean(v.drive_id), {
        message: "Informe youtube_id ou drive_id (um dos dois).",
      }),
  }),
  // Módulos do Treinamento (/treinamento): o curso em vídeo, separado dos
  // guias. Cada aula tem página própria; `guia` só aponta para o guia escrito
  // relacionado, e `video` é o slug em src/content/videos.
  treinamento: defineCollection({
    loader: glob({ pattern: "**/*.yaml", base: "./src/content/treinamento" }),
    schema: z.object({
      titulo: z.string(),
      descricao: z.string(),
      ordem: z.number().int(),
      quem: z.array(z.enum(["gestor", "corretor", "financeiro"])).default([]),
      opcional: z.boolean().default(false),
      aulas: z
        .array(
          z.object({
            slug: z.string().regex(/^[a-z0-9-]+$/),
            titulo: z.string(),
            descricao: z.string().default(""),
            video: z.string().optional(),
            guia: z.string().optional(),
          })
        )
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
