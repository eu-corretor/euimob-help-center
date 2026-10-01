# Guia de gravação

Todo vídeo é o vídeo de **um guia**: mostra a mesma tarefa, na mesma ordem, e
fica embutido no topo dele. Vídeo de visão geral (um por seção, 10 a 15 min)
entra na página de visão geral da seção.

## Onde gravar

No tenant de demonstração **Imobiliária Modelo**: é a versão que o
cliente tem. Dados fictícios, imóveis com fotos boas, WhatsApp e cobranças em
sandbox. Nunca um dado real de cliente.

## Regras

| Item | Regra |
| --- | --- |
| Duração | Guia: 2 a 5 min. Visão geral: 10 a 15 min. |
| Resolução | 1080p, navegador com zoom em 125%, janela limpa (sem abas pessoais, sem notificações). |
| Áudio | Narração em pt-BR, microfone dedicado, sem música de fundo. |
| Abertura | Sem vinheta longa: uma frase dizendo o que o vídeo mostra e o vídeo começa. |
| Cursor | Devagar. Pause um segundo no botão antes de clicar. |
| Erros | Se errar, pare e regrave o trecho. Não explique o erro no vídeo. |
| Ferramenta | OBS (gratuito) ou o gravador do próprio sistema operacional. |

## Roteiro padrão (5 partes)

1. **O que vamos fazer** (10 s): a tarefa e quando ela acontece.
2. **Onde fica** (15 s): o caminho no menu, mostrando.
3. **O passo a passo**: igual ao guia, na mesma ordem.
4. **O que a plataforma faz sozinha**: aponte os campos que se preencheram.
5. **O que fazer se der errado**: a mensagem mais comum e a saída.

## Publicar no YouTube

- Canal da EuImob, vídeo **não listado**.
- Título = título do guia. Descrição = a primeira frase do guia + os capítulos.
- **Capítulos são obrigatórios**: na descrição, um por linha, `mm:ss Assunto`,
  o primeiro em `00:00`. O YouTube os transforma em capítulos do player, e são
  os mesmos que vão em `src/content/videos/<slug>.yaml`.
- Legenda automática ativada; baixe o `.srt` para a transcrição.

## Registrar no repositório

1. `src/content/videos/<slug>.yaml` (pelo editor: coleção **Vídeos**):
   ```yaml
   youtube_id: dQw4w9WgXcQ
   duracao: "04:32"
   verificado_em: 2026-10-15
   capitulos:
     - { t: "00:00", assunto: "Quando publicar e o que a revisão confere" }
     - { t: "01:10", assunto: "Botão Publicar e a mensagem de campos faltando" }
     - { t: "02:40", assunto: "Ver o imóvel no site" }
   ```
2. No guia, `video: <slug>`.
3. `src/content/transcricoes/<slug>.md`: a legenda automática revisada, com
   timestamps a cada parágrafo (`[02:40]`), `revisada: true` quando conferida.

## Quando a tela muda

O vídeo é regravado ou **removido do guia** (tire o `video:` do cabeçalho). O
texto fica. Vídeo mostrando tela antiga é pior do que vídeo nenhum.
