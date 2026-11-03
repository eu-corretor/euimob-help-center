// O cabeçalho de três linhas de cada guia (ver interno/guia-de-estilo.md):
//
//   **Caminho:** Imóveis → Imóveis → Todos os Imóveis → **Novo**
//   **Atalho:** `/painel/imoveis`
//   **Quem faz:** captador, vendedor ou assistente
//
// Em Markdown isso vira um parágrafo só, com as linhas emendadas. Este plugin
// (hast, do processador Sätteri do Astro) transforma esse primeiro parágrafo
// numa lista de definição (<dl class="eu-route">) e marca o `---` seguinte para
// sumir. O texto-fonte não muda: o corpus da Clara continua lendo o Markdown cru.
const LABEL = /:\s*$/;

const textOf = (node) =>
  node.type === "text" ? node.value : (node.children ?? []).map(textOf).join("");

const isLabel = (node) =>
  node?.type === "element" && node.tagName === "strong" && LABEL.test(textOf(node));

// Cópia simples (os nós que o plugin recebe são somente leitura).
const clone = (node) => (node.children ? { ...node, children: node.children.map(clone) } : { ...node });

function trimEdges(nodes) {
  const out = nodes.map(clone);
  while (out[0]?.type === "text" && !out[0].value.trim()) out.shift();
  while (out.at(-1)?.type === "text" && !out.at(-1).value.trim()) out.pop();
  if (out[0]?.type === "text") out[0].value = out[0].value.trimStart();
  if (out.at(-1)?.type === "text") out.at(-1).value = out.at(-1).value.trimEnd();
  return out;
}

/** @type {import("@astrojs/markdown-satteri").SatteriProcessorOptions["hastPlugins"][number]} */
export default {
  name: "eu-guide-header",
  before(root, ctx) {
    const elements = root.children.filter((n) => n.type === "element");
    const [p, next] = elements;
    if (!p || p.tagName !== "p" || !isLabel(p.children[0])) return;

    const rows = [];
    for (const node of p.children) {
      if (isLabel(node)) rows.push({ label: textOf(node).replace(LABEL, ""), value: [] });
      else if (!(node.type === "element" && node.tagName === "br")) rows.at(-1).value.push(node);
    }
    if (rows.length < 2) return;

    ctx.replaceNode(p, {
      type: "element",
      tagName: "dl",
      properties: { className: ["eu-route"] },
      children: rows.map(({ label, value }) => ({
        type: "element",
        tagName: "div",
        properties: {},
        children: [
          { type: "element", tagName: "dt", properties: {}, children: [{ type: "text", value: label }] },
          { type: "element", tagName: "dd", properties: {}, children: trimEdges(value) },
        ],
      })),
    });

    if (next?.tagName === "hr") ctx.setProperty(next, "className", ["eu-route-rule"]);
  },
};
