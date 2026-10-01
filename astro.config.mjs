// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import { SITE } from "./site.config.mjs";

// Uma seção por funcionalidade contratada, na ordem em que aparecem no menu.
// Pasta nova em src/content/docs = entrada nova aqui.
export const SECTIONS = [
  { directory: "trilhas", label: "Trilhas" },
  { directory: "conta", label: "Conta e acesso" },
  { directory: "inicio", label: "Início" },
  { directory: "contatos", label: "Contatos" },
  { directory: "imoveis", label: "Imóveis" },
  { directory: "crm", label: "CRM" },
  { directory: "financeiro", label: "Financeiro" },
  { directory: "locacao", label: "Locação" },
  { directory: "site", label: "Site" },
  { directory: "whatsapp", label: "WhatsApp" },
  { directory: "redes-sociais", label: "Redes Sociais" },
  { directory: "assinatura-eletronica", label: "Assinatura Eletrônica" },
  { directory: "integracoes", label: "Integrações" },
  { directory: "ia", label: "IA" },
  { directory: "migracao", label: "Migração" },
];

export default defineConfig({
  site: SITE,
  integrations: [
    starlight({
      title: "Central de Ajuda EuImob",
      description: "Guias e vídeos para quem usa a plataforma EuImob.",
      defaultLocale: "root",
      locales: { root: { label: "Português (Brasil)", lang: "pt-BR" } },
      logo: { src: "./src/assets/logo.svg", alt: "EuImob" },
      favicon: "/favicon.svg",
      customCss: ["./src/styles/custom.css"],
      components: {
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
