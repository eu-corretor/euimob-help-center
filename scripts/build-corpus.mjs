// Gera, a partir de src/content, os três arquivos que a plataforma consome:
//   public/corpus/manual.md     — o que a Clara lê (guias + capítulos de vídeo)
//   public/corpus/manifest.json — hash e contagens, para o cache do cron
//   public/index.json           — path da ação Odoo → guias, para o botão "?"
// Roda antes do `astro build` (ver package.json). Rascunhos ficam de fora.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

import matter from "gray-matter";
import { parse as parseYaml } from "yaml";

import { SITE } from "../site.config.mjs";

const DOCS_DIR = "src/content/docs";
const VIDEOS_DIR = "src/content/videos";
const OUT_CORPUS = "public/corpus";
const OUT_INDEX = "public/index.json";
const SEPARATOR = "=====";

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

function slugOf(file) {
  const rel = relative(DOCS_DIR, file).split(sep).join("/").replace(/\.mdx?$/, "");
  if (rel === "index") return "";
  return rel.replace(/\/index$/, "");
}

function toSeconds(t) {
  return t.split(":").reduce((acc, part) => acc * 60 + Number(part), 0);
}

function loadVideos() {
  const videos = {};
  for (const file of walk(VIDEOS_DIR).filter((f) => f.endsWith(".yaml"))) {
    const slug = relative(VIDEOS_DIR, file).replace(/\.yaml$/, "");
    videos[slug] = parseYaml(readFileSync(file, "utf8"));
  }
  return videos;
}

function loadGuides(videos) {
  return walk(DOCS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((file) => {
      const { data, content } = matter(readFileSync(file, "utf8"));
      const slug = slugOf(file);
      const video = data.video ? { slug: data.video, ...videos[data.video] } : null;
      if (data.video && !videos[data.video]) {
        throw new Error(`${file}: vídeo "${data.video}" não existe em ${VIDEOS_DIR}`);
      }
      return {
        slug,
        title: data.title,
        secao: data.secao ?? slug.split("/")[0],
        telas: data.telas ?? [],
        quem: data.quem ?? [],
        trilha: Boolean(data.trilha),
        draft: Boolean(data.draft),
        url: slug ? `${SITE}/${slug}/` : `${SITE}/`,
        body: content.trim(),
        video,
      };
    })
    .filter((g) => !g.draft && g.slug !== "")
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

function renderGuide(g) {
  const head = [
    `${SEPARATOR} ${g.slug} ${SEPARATOR}`,
    `Título: ${g.title}`,
    `Seção: ${g.secao}`,
    g.telas.length ? `Telas: ${g.telas.join(", ")}` : null,
    g.quem.length ? `Quem: ${g.quem.join(", ")}` : null,
    `URL: ${g.url}`,
  ].filter(Boolean);
  const parts = [head.join("\n"), g.body];
  if (g.video) {
    const chapters = g.video.capitulos.map(
      (c) => `  ${c.t} (${toSeconds(c.t)}s) — ${c.assunto}`
    );
    parts.push(
      [
        `Vídeo deste guia (${g.video.duracao}). Para apontar um trecho, cite ` +
          `[[ajuda:${g.slug}#t=<segundos>|vá ao minuto mm:ss do vídeo]].`,
        "Capítulos:",
        ...chapters,
      ].join("\n")
    );
  }
  return parts.join("\n\n");
}

function buildIndex(guides) {
  const entry = (g) => ({
    slug: g.slug,
    title: g.title,
    url: g.url,
    video: g.video?.youtube_id ?? null,
    duracao: g.video?.duracao ?? null,
  });
  const index = { _trilhas: guides.filter((g) => g.trilha).map(entry) };
  for (const g of guides) {
    for (const tela of g.telas) {
      (index[tela] ||= []).push(entry(g));
    }
  }
  return index;
}

const videos = loadVideos();
const guides = loadGuides(videos);
const manual = guides.map(renderGuide).join("\n\n");
const hash = createHash("sha256").update(manual).digest("hex");

mkdirSync(OUT_CORPUS, { recursive: true });
writeFileSync(join(OUT_CORPUS, "manual.md"), manual + "\n");
writeFileSync(
  join(OUT_CORPUS, "manifest.json"),
  JSON.stringify(
    {
      hash,
      gerado_em: new Date().toISOString(),
      guias: guides.length,
      videos: guides.filter((g) => g.video).length,
      site: SITE,
    },
    null,
    2
  ) + "\n"
);
writeFileSync(OUT_INDEX, JSON.stringify(buildIndex(guides), null, 2) + "\n");

console.log(`corpus: ${guides.length} guias, ${Object.keys(videos).length} vídeos, hash ${hash.slice(0, 12)}`);
