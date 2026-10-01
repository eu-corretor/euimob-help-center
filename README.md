# Central de Ajuda EuImob

Guias passo a passo e vídeos para quem usa a plataforma EuImob, publicados em
<https://ajuda.euimob.com.br>. Este repositório é a **fonte única**: o que a
pessoa lê na central é o que a Clara (a assistente dentro do sistema) consulta
para responder dúvidas de uso.

## Como funciona

| Peça | Onde | O que faz |
| --- | --- | --- |
| Guias | `src/content/docs/<seção>/<guia>.md` | Um guia = uma tarefa. Markdown com cabeçalho (`title`, `telas`, `quem`, `video`, `verificado_em`). |
| Vídeos | `src/content/videos/<slug>.yaml` | ID do YouTube, duração e **capítulos** (`mm:ss — assunto`). O guia cita o vídeo pelo `slug`. |
| Transcrições | `src/content/transcricoes/<slug>.md` | Transcrição com timestamps. Entra na busca do site, não no prompt da Clara. |
| Site | Astro Starlight | Busca offline, tema da marca, player com capítulos, `?t=<segundos>` abre o vídeo no ponto certo. |
| Editor | `/admin` (Sveltia CMS) | Quem escreve loga com o GitHub, edita numa tela visual e publica. Rascunho → Em revisão → Publicado. |
| Corpus | `scripts/build-corpus.mjs` | No build, gera `corpus/manual.md` (guias + capítulos, para a Clara), `corpus/manifest.json` (hash) e `index.json` (tela → guias, para o botão "?" do sistema). |
| Deploy | Cloudflare Workers (Workers Builds) | Push na `main` roda `npm run build` e `npx wrangler deploy`; o `wrangler.jsonc` publica `dist/` como site estático. Branches que não são a `main` geram versão de prévia. |

Regras de escrita em [`interno/guia-de-estilo.md`](interno/guia-de-estilo.md),
de gravação em [`interno/guia-de-gravacao.md`](interno/guia-de-gravacao.md),
do editor em [`interno/como-usar-o-editor.md`](interno/como-usar-o-editor.md).

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:4321
npm run corpus     # só gera public/corpus/ e public/index.json
npm run build      # corpus + site em dist/
```

Node 22.12 ou superior (exigência do Astro); o `.nvmrc` fixa a versão no build da Cloudflare.

## Estrutura

```
src/content/docs/        guias, uma pasta por seção (= funcionalidade contratada)
src/content/videos/      metadados dos vídeos (YouTube, capítulos)
src/content/transcricoes/
src/components/          Video.astro e as sobrescritas do Starlight (título com vídeo, rodapé "Revisado em")
src/pages/interno/       /interno/desatualizados — guias e vídeos com mais de 6 meses
public/admin/            o editor (Sveltia CMS) e a configuração das coleções
public/_headers          cabeçalhos de segurança, CSP do editor, CORS do corpus e do index.json
wrangler.jsonc           deploy na Cloudflare: dist/ como assets estáticos
scripts/build-corpus.mjs
site.config.mjs          endereço público da central
interno/                 documentação da equipe (fora do site, mas pública no GitHub)
```

## Convenções

- Tudo em pt-BR, sem nome interno de sistema, modelo ou campo: fala-se o que a
  pessoa vê na tela.
- Um guia cabe numa página. O que não couber vira outro guia.
- Todo vídeo é o vídeo de um guia e tem capítulos. Vídeo sem guia não existe.
- `verificado_em` é a data em que alguém conferiu o guia contra o sistema.
  Mais de 6 meses aparece em `/interno/desatualizados`.
