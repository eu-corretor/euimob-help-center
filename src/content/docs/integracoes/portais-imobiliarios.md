---
title: "Enviar imóveis para os portais e receber os leads"
description: "Como criar a integração com um portal imobiliário (ZAP, VivaReal, OLX, Chaves na Mão, ImovelWeb, SP Imóveis), escolher os imóveis enviados e fazer os leads do portal chegarem ao CRM."
secao: integracoes
telas: [integracoes]
quem: [gestor]
funcionalidade: integracoes
verificado_em: 2026-11-18
versao_sistema: "19.0-2026.11"
sidebar:
  order: 1
---

**Caminho:** Integrações → Integrações → **Novo**
**Atalho:** `/painel/integracoes`
**Quem faz:** gestor

> O sistema gera um **Link do XML** com os seus imóveis e o mantém atualizado.
> O portal lê esse link e publica os anúncios. Os contatos que chegam pelos
> anúncios entram no CRM como leads.

---

## Passo a passo

1. **Integrações → Integrações** → botão **Novo**
2. Em **Categoria**, escolha **Portais Imobiliários**
3. Em **Provedor**, escolha o portal: **VivaReal / ZAP**, **OLX**,
   **Chaves na Mão**, **ImovelWeb** ou **SP Imóveis**
4. Em **Modo**, escolha:
   - **Todos**: vão todos os imóveis publicados
   - **Selecionados**: vão só os imóveis da aba **Imóveis**. Adicione cada um
     numa linha e, se quiser, escolha um **Destaque** só para esse portal
5. Salve
6. Copie o **Link do XML** e cadastre-o no portal
7. Faça o passo de leads do seu portal, na tabela abaixo

Copie os links **só depois de salvar**: eles mudam ao salvar.

## Receber os leads no CRM

Cada portal entrega os leads de um jeito:

| Portal | O que fazer |
| --- | --- |
| **VivaReal / ZAP** e **OLX** | Nada. Os leads chegam sozinhos ao CRM, e o formulário não mostra **Link de Leads** |
| **Chaves na Mão** | Preencha **Token de Leads do Chaves na Mão** e envie o **Link de Leads** ao suporte do Chaves na Mão (veja abaixo) |
| **ImovelWeb** e **SP Imóveis** | Copie o **Link de Leads** e cadastre-o no portal. No ImovelWeb, ele vai no campo **URL Callback** |

### Chaves na Mão: o token de leads

1. No painel do Chaves na Mão, abra **Meus Dados → Dados Adicionais** e copie
   o **Token Integração de leads**
2. Na integração, cole-o em **Token de Leads do Chaves na Mão** e salve
3. Envie ao suporte do Chaves na Mão o **Link de Leads** que aparece na
   integração

O **Link de Leads** do Chaves na Mão é o mesmo para todas as imobiliárias. É o
token que diz ao sistema que o lead é seu, por isso ele precisa estar
preenchido para os leads chegarem.

## O que a plataforma faz sozinha

- Atualiza o XML de hora em hora com o que mudou nos imóveis.
- Identifica o imóvel do anúncio e já liga o lead a ele no CRM.
- Se o portal enviar o mesmo lead de novo, o CRM não cria um segundo.
- No Chaves na Mão, envia as comodidades e os itens de condomínio com os nomes
  que o portal aceita. Veja
  [Cadastros auxiliares](/imoveis/cadastros-auxiliares/#nomes-nos-portais).

## Se der errado

| Mensagem ou situação | O que fazer |
| --- | --- |
| *Este token de leads do Chaves na Mão já está em uso em outra integração.* | O token já está em outra integração sua. Use uma só integração do Chaves na Mão, ou confira se copiou o token certo |
| Os leads do Chaves na Mão não chegam | Confira se o **Token de Leads do Chaves na Mão** é o mesmo do painel do portal e se o suporte do portal recebeu o **Link de Leads** |
| O portal não lê o XML | Confira se o link cadastrado no portal é o **Link do XML** copiado depois de salvar |
| Um imóvel não aparece no portal | No modo **Todos**, só vão os imóveis publicados. No modo **Selecionados**, confira se ele está na aba **Imóveis** |
| A integração aparece com **Status** de erro | Abra a aba **Logs** da integração: a mensagem diz o que falhou |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Histórico do que cada integração fez | Integrações → **Logs** (`/painel/logs-integracao`) |
| Nomes das comodidades nos portais | [Cadastros auxiliares](/imoveis/cadastros-auxiliares/) |
| Deixar o imóvel pronto para os portais | [Publicar um imóvel](/imoveis/publicar-um-imovel/) |
