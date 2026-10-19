---
title: "O painel de locação"
description: "O que cada bloco do painel mostra, de onde vem cada número e como chegar à lista por trás de um indicador."
secao: locacao
telas: [painel-locacao]
quem: [gestor, financeiro]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** Locação → **Painel**
**Atalho:** `/painel/painel-locacao`
**Quem faz:** quem tem acesso à Locação. Os blocos **Inadimplência e
cobrança** e **Faturas e caixa** só aparecem para quem também tem o Financeiro

> O painel é a posição **do dia**. Cada número é um atalho: clique nele e a
> lista que o gerou abre, já filtrada. Número zerado não abre nada.

---

## Passo a passo

1. **Locação → Painel**
2. Leia o cabeçalho **Painel da Locação** e, abaixo, **Posição de** (a data de
   hoje)
3. Percorra os blocos de cima para baixo (tabela abaixo)
4. Clique no número que chamou atenção → a lista abre filtrada → resolva ali
5. Volte ao painel e clique em **Atualizar** para refazer a apuração sem
   recarregar a página

## O que cada bloco mostra

| Bloco | Indicadores | Lê-se assim |
| --- | --- | --- |
| **Contratos e carteira** | Contratos ativos · Em rescisão · Encerrados no mês · Vacância da carteira | A vacância diz *"X de Y imóveis administrados sem contrato"*: Y são os imóveis com proprietário cadastrado que aceitam aluguel ou temporada, ou que têm contrato vigente; X são os que não estão com status **Alugado** |
| **Inadimplência e cobrança** | Atraso de 1 a 7 dias · Atraso de 8 a 30 dias · Atraso acima de 30 dias · Índice de inadimplência | O índice é o vencido em aberto dos últimos 30 dias sobre o faturado com vencimento nesses 30 dias. O atraso acima de 30 dias fica fora do índice |
| **Faturas e caixa** | A vencer em 7 dias · Recebido no mês · Emitido no mês | Só faturas de locação, inclusive a do acerto de rescisão; as de comissão não entram. **Recebido no mês** conta pela data de vencimento, não pela do pagamento |
| **Repasses aos proprietários** | A repassar · Repasses garantidos · Repasses tradicionais · Repasses retidos | *Garantidos* são os antecipados pela imobiliária com a fatura do locatário ainda em aberto |
| **Garantias locatícias** | Vencem em 30 dias · Vencem em 60 dias · Garantias vencidas | *Vencida* é garantia com data de fim já passada em contrato de pé. Garantia sem data de fim (fiador sem prazo) nunca vence aqui |
| **Seguro incêndio** | Contratos sem apólice · Apólices vencendo em 30 dias · Apólices vencidas | Lê a aba Garantias de cada contrato |

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Você abre o painel | Apura tudo na hora, só da sua imobiliária. Enquanto calcula aparece *Apurando os números…* |
| Você clica num indicador | Abre a lista correspondente (contratos, rescisões, imóveis, faturas, repasses, garantias ou apólices) com o filtro daquele número |

## Rotina que vale adotar

| Quando | Olhe |
| --- | --- |
| Toda segunda | **Atraso de 1 a 7 dias** e **A vencer em 7 dias** |
| Dia do repasse | **A repassar** e **Repasses retidos** |
| Início do mês | **Vacância da carteira** e **Garantias vencidas** |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Ver a inadimplência por contrato | Locação → Relatórios → Inadimplência · `/painel/relatorio-inadimplencia` |
| Ver os imóveis vagos | Locação → Relatórios → Imóveis e Vacância · `/painel/relatorio-imoveis-locacao` |
| Liberar ou reter um repasse | [Repasses ao proprietário](/locacao/repasses-ao-proprietario/) |
| Entender os relatórios | [Relatórios de locação](/locacao/relatorios-de-locacao/) |
