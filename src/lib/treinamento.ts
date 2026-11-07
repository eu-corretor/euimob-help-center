// O Treinamento: o curso em vídeo da plataforma, separado dos guias.
// Módulos em src/content/treinamento/*.yaml; cada aula tem página própria em
// /treinamento/<módulo>/<aula>/. Um guia só aponta para a aula (lessonForGuide).
// Só entra no site a aula com `video`; o módulo sem nenhuma aula com vídeo fica
// de fora. As demais continuam nos YAMLs e aparecem quando ganharem vídeo.
import { getCollection, getEntry } from "astro:content";

import { hrefOf } from "./guides";

export interface LessonVideo {
  slug: string;
  duracao: string;
}

export interface Lesson {
  /** `<módulo>/<aula>`: chave do progresso e do sidebar. */
  id: string;
  slug: string;
  title: string;
  description: string;
  href: string;
  video: LessonVideo;
  guide: { id: string; title: string; href: string } | null;
}

export interface Module {
  slug: string;
  number: number;
  titulo: string;
  descricao: string;
  quem: string[];
  opcional: boolean;
  href: string;
  lessons: Lesson[];
}

let cache: Promise<Module[]> | undefined;

async function load(): Promise<Module[]> {
  const entries = (await getCollection("treinamento")).sort((a, b) => a.data.ordem - b.data.ordem);
  const modules = await Promise.all(
    entries.map(async (entry) => {
      const slug = entry.id.replace(/^\d+-/, "");
      // Valida todas as aulas, mesmo as ainda sem vídeo, e só depois filtra.
      const lessons = await Promise.all(
        entry.data.aulas.map(async (aula) => {
          let guide: Lesson["guide"] = null;
          if (aula.guia) {
            const doc = await getEntry("docs", aula.guia);
            if (!doc || doc.data.draft) {
              throw new Error(
                `A aula "${slug}/${aula.slug}" aponta para o guia "${aula.guia}", mas não existe guia publicado em src/content/docs/${aula.guia}.md`
              );
            }
            guide = { id: doc.id, title: doc.data.title, href: hrefOf(doc) };
          }
          let video: LessonVideo | null = null;
          if (aula.video) {
            const v = await getEntry("videos", aula.video);
            if (!v) {
              throw new Error(
                `A aula "${slug}/${aula.slug}" cita o vídeo "${aula.video}", mas não existe src/content/videos/${aula.video}.yaml`
              );
            }
            video = { slug: aula.video, duracao: v.data.duracao };
          }
          return {
            id: `${slug}/${aula.slug}`,
            slug: aula.slug,
            title: aula.titulo,
            description: aula.descricao,
            href: `/treinamento/${slug}/${aula.slug}/`,
            video,
            guide,
          };
        })
      );
      const seen = new Set<string>();
      for (const l of lessons) {
        if (seen.has(l.slug)) throw new Error(`O módulo "${entry.id}" tem duas aulas com o slug "${l.slug}"`);
        seen.add(l.slug);
      }
      return {
        slug,
        titulo: entry.data.titulo,
        descricao: entry.data.descricao,
        quem: entry.data.quem,
        opcional: entry.data.opcional,
        href: `/treinamento/${slug}/`,
        lessons: lessons.filter((l): l is Lesson => l.video !== null),
      };
    })
  );
  return modules.filter((m) => m.lessons.length > 0).map((m, i) => ({ ...m, number: i + 1 }));
}

export function getModules(): Promise<Module[]> {
  return (cache ??= load());
}

export interface LessonPosition {
  module: Module;
  index: number;
  lesson: Lesson;
  prev: Lesson | null;
  /** A próxima aula do módulo; na última, a primeira do módulo seguinte. */
  next: { lesson: Lesson; module: Module } | null;
}

/** Todas as aulas com a posição de cada uma, para gerar as páginas de aula. */
export async function getLessonPositions(): Promise<LessonPosition[]> {
  const modules = await getModules();
  return modules.flatMap((module, m) =>
    module.lessons.map((lesson, index) => {
      const following = module.lessons[index + 1];
      const nextModule = modules[m + 1];
      return {
        module,
        index,
        lesson,
        prev: module.lessons[index - 1] ?? null,
        next: following
          ? { lesson: following, module }
          : nextModule
            ? { lesson: nextModule.lessons[0], module: nextModule }
            : null,
      };
    })
  );
}

/** A aula em vídeo que aponta para este guia (a primeira), ou null. */
export async function lessonForGuide(guideId: string): Promise<{ lesson: Lesson; module: Module } | null> {
  for (const module of await getModules()) {
    const lesson = module.lessons.find((l) => l.guide?.id === guideId);
    if (lesson) return { lesson, module };
  }
  return null;
}

/** Sidebar das páginas do Treinamento: só módulos e aulas, sem os guias. */
export async function trainingSidebar() {
  const modules = await getModules();
  return [
    { label: "Visão geral", link: "/treinamento/" },
    ...modules.map((m) => ({
      label: `${m.number}. ${m.titulo}`,
      items: m.lessons.map((l) => ({ label: l.title, link: l.href })),
    })),
  ];
}

/** Lista compacta (id, href, título) que os scripts de progresso recebem. */
export const progressPayload = (lessons: Lesson[]) =>
  JSON.stringify(lessons.map(({ id, href, title }) => ({ slug: id, href, title })));

export const QUEM_LABEL: Record<string, string> = {
  gestor: "Gestor",
  corretor: "Corretor",
  financeiro: "Financeiro",
};

const toSeconds = (t: string) => t.split(":").reduce((acc, part) => acc * 60 + Number(part), 0);

/** Duração somada dos vídeos das aulas, como "12 min", ou null se for zero. */
export function totalDuration(lessons: Lesson[]): string | null {
  const seconds = lessons.reduce((sum, l) => sum + toSeconds(l.video.duracao), 0);
  if (!seconds) return null;
  const minutes = Math.max(1, Math.round(seconds / 60));
  return minutes < 60 ? `${minutes} min` : `${Math.floor(minutes / 60)} h ${String(minutes % 60).padStart(2, "0")} min`;
}
