# Guia de estilo

Documentação **para quem usa** a plataforma: gestor, corretor, captador,
financeiro. Não se usa nome de modelo, de campo técnico nem de método. Fala-se o
que a pessoa vê na tela, com os nomes que estão na tela.

## Um guia = uma tarefa

Cada guia cabe em uma página e responde "como eu faço X". O que não couber vira
outro guia, não uma seção a mais. O corretor lê com o sistema aberto do lado.

## Formato de cada guia

1. **Cabeçalho** (as três linhas iniciais): caminho no menu, atalho de URL e
   quem faz.
   ```
   **Caminho:** Imóveis → Imóveis → Todos os Imóveis → **Novo**
   **Atalho:** `/odoo/imoveis`
   **Quem faz:** captador, vendedor ou assistente
   ```
2. **Passo a passo**: lista numerada, uma ação por linha, botões e campos em
   **negrito** com o nome exato da tela.
3. **O que a plataforma faz sozinha**: para a pessoa não procurar campo que se
   preenche automaticamente.
4. **Se der errado**: tabela *mensagem → o que fazer*, com a mensagem entre
   asteriscos como aparece na tela.
5. **Caminhos relacionados**: telas vizinhas, com menu e atalho, e links para
   outros guias (`/secao/nome-do-guia/`).

## O cabeçalho (frontmatter)

```yaml
title: Publicar um imóvel
description: Uma frase para a busca e para o compartilhamento.
secao: imoveis                 # a pasta
telas: [imoveis]               # paths de ação em que o botão "?" mostra este guia
quem: [corretor, gestor]       # gestor | corretor | financeiro
funcionalidade: imoveis        # código da funcionalidade contratada
video: publicar-um-imovel      # slug em src/content/videos/ (opcional)
verificado_em: 2026-10-15      # quando alguém conferiu contra o sistema
versao_sistema: "19.0-2026.10"
```

`telas` é o que faz o guia aparecer no botão "?" dentro do sistema: é o final
da URL da tela (`/odoo/imoveis` → `imoveis`). Um guia pode aparecer em mais de
uma tela.

## Tom

- Direto, na segunda pessoa ("clique", "digite"), sem "você deve".
- Frases curtas. Uma ideia por frase.
- A palavra é **guia** (não tutorial, não manual). A empresa é **imobiliária**.
  A pessoa é **corretor**, **gestor** ou **financeiro**.
- Nunca o nome interno do projeto, nunca "Odoo", nunca nome de módulo.
- A plataforma se chama **EuImob**; a assistente, **Clara**.

## Capturas de tela

Só quando o texto não basta. Sempre do tenant de demonstração (ver
`guia-de-gravacao.md`), em `public/imagens/<secao>/<guia>-<n>.png`, largura
máxima 1600 px, sem dado real.
