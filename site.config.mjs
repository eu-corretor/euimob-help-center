// Endereço público da central. Lido pelo astro.config.mjs e pelo
// scripts/build-corpus.mjs (que não pode importar o Astro): as URLs absolutas
// do corpus da Clara e do index.json do botão "?" saem daqui.
export const SITE = "https://ajuda.euimob.com.br";

// Uma seção por funcionalidade contratada, na ordem em que aparecem no menu.
// Pasta nova em src/content/docs = entrada nova aqui (e um ícone em src/lib/icons.ts).
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
