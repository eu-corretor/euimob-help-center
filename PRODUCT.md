# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Gestor** da imobiliária: monta a conta, a equipe, os cadastros e os canais (site, WhatsApp, redes).
- **Corretor** (captador, vendedor, assistente): cadastra contatos e imóveis, toca o pipeline, agenda visitas.
- **Financeiro**: comissão, cobranças, locação (faturas, repasses, DIMOB).

Leem com o sistema Eu Imob aberto ao lado: o guia é consultado no meio de uma tarefa, não lido de ponta a ponta.

## Product Purpose

A Central de Ajuda Eu Imob (ajuda.euimob.com.br) é a fonte única de "como eu faço X" na plataforma Eu Imob. O que a pessoa lê aqui é o mesmo corpus que a Clara, a assistente dentro do sistema, consulta para responder dúvidas de uso; o botão "?" de cada tela do sistema abre os guias daquela tela.

Sucesso: a pessoa acha o guia certo em segundos, conclui a tarefa sem chamar o suporte, e um cliente novo consegue aprender a plataforma inteira pelo Treinamento (curso em vídeo), módulo a módulo.

## Positioning

Um guia = uma tarefa, escrito com os nomes exatos da tela, com caminho no menu e atalho de URL. Cada vídeo é o vídeo de um guia, com capítulos que a Clara cita pelo minuto.

## Operating Context

- Guias em Markdown (`src/content/docs/<seção>/`), editados no Sveltia CMS (`/admin`) com fluxo Rascunho → Em revisão → Publicado.
- Vídeos no YouTube (não listados), registrados em `src/content/videos/<slug>.yaml` com capítulos; ainda nenhum publicado.
- Treinamento (`/treinamento`): curso em vídeo **separado dos guias**. Módulos em `src/content/treinamento/*.yaml`; cada aula tem página própria (`/treinamento/<módulo>/<aula>/`), com `video:` (sem ele, a aula fica fora do site até ter vídeo, e o módulo sem nenhuma aula com vídeo também) e `guia:` opcional apontando para o guia escrito relacionado. O guia só mostra um link para a aula; ele não vira aula.
- Deploy estático na Cloudflare.

## Capabilities and Constraints

- Astro Starlight: busca offline (Pagefind), sidebar por seção, temas claro e escuro.
- 15 seções = funcionalidades contratadas (Conta, Imóveis, CRM, Financeiro, Locação, Site, WhatsApp, Redes Sociais, Assinatura Eletrônica, Integrações, IA, Migração…).
- O corpus da Clara e o `index.json` do botão "?" são gerados no build e não podem mudar de formato.
- Tudo em pt-BR. Nunca nome interno de sistema, modelo ou campo.

## Brand Commitments

- Nome: **Eu Imob** (duas palavras). A assistente é a **Clara**. A palavra é **guia** (não tutorial, não manual); no curso, **aula** e **módulo**.
- Visual = o do site **euimob.com.br** (não o da Eu Corretor): marca "Eu Imob" ("Eu" azul `#4164dd`), laranja `#fe9119` só como acento, fonte **Inter Tight**, cabeçalho branco, botões pílula, cards raio 24, escuro grafite `#141416`. Tokens em `src/styles/tokens.css`.
- Tom: direto, segunda pessoa, frases curtas, sem "você deve", sem hype.

## Evidence on Hand

- ~50 guias reais, trilhas do gestor e do corretor, perguntas frequentes.
- Nenhum vídeo publicado ainda; nenhuma captura de tela ainda (marcadores `<!-- PRINT -->`). Não inventar depoimentos, números de clientes ou métricas.

## Product Principles

1. A tarefa da pessoa vem antes da marca: achar e seguir o passo a passo é o trabalho da página.
2. Uma fonte, três leitores: a pessoa, a Clara e o botão "?" leem o mesmo conteúdo.
3. Conteúdo verificado ou fora: o que está desatualizado aparece em `/interno/desatualizados`.
4. Aprender em ordem: trilhas e Treinamento encadeiam os guias na ordem em que uma coisa depende da outra.

## Accessibility & Inclusion

WCAG 2.1 AA: contraste, foco visível, navegação por teclado, movimento reduzido respeitado.
