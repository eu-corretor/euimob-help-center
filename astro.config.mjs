// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { satteri } from "@astrojs/markdown-satteri";

import { SECTIONS, SITE } from "./site.config.mjs";
import guideHeader from "./src/lib/guide-header-plugin.mjs";

export default defineConfig({
  site: SITE,
  markdown: {
    // Cabeçalho "Caminho / Atalho / Quem faz" de cada guia vira um bloco (ver o plugin).
    processor: satteri({ hastPlugins: [guideHeader] }),
  },
  integrations: [
    starlight({
      title: "Central de Ajuda Eu Imob",
      description: "Guias e vídeos para quem usa a plataforma Eu Imob.",
      defaultLocale: "root",
      locales: { root: { label: "Português (Brasil)", lang: "pt-BR" } },
      logo: { src: "./src/assets/logo.svg", alt: "Eu Imob" },
      favicon: "/favicon.svg",
      customCss: ["./src/styles/fonts.css", "./src/styles/tokens.css", "./src/styles/components.css"],
      components: {
        Header: "./src/components/overrides/Header.astro",
        SiteTitle: "./src/components/overrides/SiteTitle.astro",
        Hero: "./src/components/overrides/Hero.astro",
        PageTitle: "./src/components/overrides/PageTitle.astro",
        Footer: "./src/components/overrides/Footer.astro",
      },
      sidebar: [
        ...SECTIONS.map(({ directory, label }) => ({
          label,
          collapsed: directory !== "trilhas",
          items: [{ autogenerate: { directory } }],
        })),
        { label: "Perguntas frequentes", link: "/perguntas-frequentes/" },
      ],
      pagination: true,
      lastUpdated: false,
      editLink: {
        baseUrl: "https://github.com/eu-corretor/euimob-help-center/edit/main/",
      },
      credits: false,
    }),
  ],
});
