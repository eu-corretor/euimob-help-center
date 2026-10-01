# Como usar o editor

O editor fica em <https://ajuda.euimob.com.br/admin>. Quem escreve entra com
a própria conta do GitHub, que precisa ser colaboradora deste repositório
(o gestor da plataforma convida em *Settings → Collaborators*; o repositório é
público, então o convite não tem custo).

## Fluxo

1. **Guias → Novo guia**. Preencha o caminho (`secao/nome-do-guia`, sem acento),
   o cabeçalho e o conteúdo. O editor mostra o Markdown formatado.
2. **Salvar** cria um rascunho. Ninguém vê o rascunho na central.
3. Mude o estado para **Em revisão** quando quiser que outra pessoa leia. O
   link de pré-visualização aparece no próprio editor.
4. **Publicar** põe no ar. Em cerca de 1 minuto a central atualiza; em até 15
   minutos a Clara passa a responder com o texto novo.

Cada publicação fica no histórico do repositório: dá para voltar qualquer
versão.

## Vídeos e transcrições

Coleções **Vídeos** e **Transcrições**. Primeiro o vídeo (ID do YouTube,
duração, capítulos), depois o guia com o campo *Vídeo* apontando para ele.

## Configuração (uma vez, pela equipe técnica)

- O editor usa o [Sveltia CMS](https://github.com/sveltia/sveltia-cms) com a
  configuração em `public/admin/config.yml`.
- A autenticação GitHub passa por um Worker do Cloudflare
  ([sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth)), publicado
  em `ajuda-auth.euimob.com.br` (`base_url` do `config.yml`), com um GitHub
  OAuth App cujo callback é `https://ajuda-auth.euimob.com.br/callback`.
- Cloudflare **Workers** (Workers Builds) ligado a este repositório. Em
  *Settings → Build*: comando de build `npm run build`, comando de deploy
  `npx wrangler deploy`, comando das outras branches
  `npx wrangler versions upload` (é o que dá link de prévia ao *Em revisão*).
  O `wrangler.jsonc` na raiz publica `dist/` como site estático.
- Domínio `ajuda.euimob.com.br` em *Settings → Domains & Routes* do Worker.

## Guias desatualizados

<https://ajuda.euimob.com.br/interno/desatualizados> lista guias e vídeos
sem `verificado_em` ou com mais de 6 meses. É a pauta de revisão. Ao conferir
um guia contra o sistema, atualize a data, mesmo que nada tenha mudado.
