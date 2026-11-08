// Leitura dos guias publicados, compartilhada pela home, pelo Treinamento e
// pela moldura de cada guia. Rascunhos (`draft: true`) nunca aparecem.
import { getCollection, getEntry, type CollectionEntry } from "astro:content";

import { SECTIONS } from "../../site.config.mjs";

export type Guide = CollectionEntry<"docs">;

export interface GuideVideo {
  duracao: string;
}

const WORDS_PER_MINUTE = 180;

/** Minutos de leitura, arredondados para cima, no mínimo 1. */
export function readingMinutes(guide: Guide): number {
  const words = (guide.body ?? "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export async function videoOf(guide: Guide): Promise<GuideVideo | null> {
  if (!guide.data.video) return null;
  const video = await getEntry("videos", guide.data.video);
  return video ? { duracao: video.data.duracao } : null;
}

export const hrefOf = (guide: Guide) => `/${guide.id}/`;

const sectionOf = (guide: Guide) => guide.id.split("/")[0];

const isGuide = (guide: Guide) =>
  !guide.data.draft && guide.id.includes("/") && !guide.id.endsWith("/index");

const sidebarOrder = (a: Guide, b: Guide) =>
  (a.data.sidebar?.order ?? 999) - (b.data.sidebar?.order ?? 999) ||
  a.data.title.localeCompare(b.data.title, "pt-BR");

const NOT_GUIDE_SECTIONS = new Set(["trilhas", "novidades"]);

/** Guias publicados de todas as seções de funcionalidade (sem trilhas, FAQ nem novidades). */
export async function getGuides(): Promise<Guide[]> {
  const docs = await getCollection("docs", isGuide);
  return docs.filter((g) => !NOT_GUIDE_SECTIONS.has(sectionOf(g))).sort(sidebarOrder);
}

export interface Section {
  directory: string;
  label: string;
  description: string;
  guides: Guide[];
}

/** As seções na ordem do menu, com a descrição da página de visão geral. */
export async function getSections(): Promise<Section[]> {
  const [guides, all] = await Promise.all([getGuides(), getCollection("docs")]);
  return SECTIONS.filter(({ directory }) => directory !== "trilhas").map(({ directory, label }) => ({
    directory,
    label,
    description: all.find((d) => d.id === `${directory}/index` || d.id === directory)?.data.description ?? "",
    guides: guides.filter((g) => sectionOf(g) === directory),
  }));
}

export function sectionLabel(id: string): { directory: string; label: string } | null {
  const directory = id.split("/")[0];
  return SECTIONS.find((s) => s.directory === directory) ?? null;
}
