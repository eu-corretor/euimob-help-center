---
title: "Relatórios: vacância, inadimplência, repasses, funil de locação"
description: "O que cada um dos oito relatórios de locação responde, como abrir em lista ou pivô e como agrupar."
secao: locacao
telas: [relatorio-imoveis-locacao, relatorio-agenciamentos, relatorio-funil-locacao, relatorio-taxas-locacao, relatorio-inadimplencia, relatorio-repasses, relatorio-reajustes, relatorio-dimob]
quem: [gestor, financeiro]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** Locação → **Relatórios**
**Atalho:** `/painel/relatorio-imoveis-locacao` e os demais abaixo
**Quem faz:** quem tem acesso à Locação (o menu Retenção de Taxas só aparece
para o gestor e o menu Rendimentos Declarados só para quem tem o Financeiro)

> Cada relatório é a tela de uma pergunta. Todos abrem já filtrados e
> agrupados; mude o agrupamento pela barra de busca.

---

## Os oito relatórios

| Relatório | A pergunta | Como abre | Atalho |
| --- | --- | --- | --- |
| **Imóveis e Vacância** | Quais imóveis da carteira estão sem contrato? | Lista dos imóveis administrados (com proprietário e de aluguel, temporada ou com contrato vigente), agrupada por **Status** do imóvel. Abra o imóvel → aba **Locação** → **Vago desde** para ver há quanto tempo | `/painel/relatorio-imoveis-locacao` |
| **Agenciamentos** | Quanto cada gestor de carteira trouxe em contratos? | Pivô: **Gestor da carteira** nas linhas, mês de **Início** nas colunas, soma do **Aluguel**. Entram contratos em qualquer situação, inclusive rascunho e cancelados: filtre por **Situação** | `/painel/relatorio-agenciamentos` |
| **Funil de Locação** | Como estão as oportunidades de locação? | Lista das oportunidades marcadas como locação, agrupada por **Etapa** | `/painel/relatorio-funil-locacao` |
| **Retenção de Taxas** | Quanto a imobiliária reteve de administração e intermediação? | Pivô: tipo de taxa nas linhas, mês do repasse nas colunas, soma do valor | `/painel/relatorio-taxas-locacao` |
| **Inadimplência** | Quem está devendo e quanto? | Lista das faturas de locação com o filtro **Vencidas**, agrupada por **Contrato**, com **Em aberto** somado | `/painel/relatorio-inadimplencia` |
| **Repasses por Proprietário** | Quanto cada proprietário recebeu no período? | Pivô: **Proprietário** nas linhas, mês da **Data do repasse** nas colunas, soma do **Líquido** | `/painel/relatorio-repasses` |
| **Reajustes do Período** | Que reajustes vencem este mês? | Lista dos reajustes agrupada por **Vigência** | `/painel/relatorio-reajustes` |
| **Rendimentos Declarados** | O que foi declarado por proprietário na DIMOB? | Pivô: **Locador** nas linhas, **Mês** nas colunas, soma do **Rendimento bruto**. Só aparece depois de apurar uma DIMOB | `/painel/relatorio-dimob` |

## Passo a passo

1. **Locação → Relatórios** → escolha o relatório
2. Nos quatro relatórios em pivô (Agenciamentos, Retenção de Taxas, Repasses
   por Proprietário, Rendimentos Declarados), os ícones de visão no canto
   superior direito trocam para lista. Os outros quatro são só lista
3. Para mudar o agrupamento, abra a barra de busca → **Agrupar por** → escolha
   o campo. Campo que não está na lista: **Adicionar grupo personalizado**
4. Em pivô, clique num cabeçalho para abrir ou fechar níveis; o botão de
   download exporta a tabela para planilha
5. Clique numa linha para abrir o registro (imóvel, oportunidade, contrato,
   fatura, repasse, reajuste). Retenção de Taxas e Rendimentos Declarados são
   só números, sem registro para abrir

## Perguntas frequentes

| Pergunta | Relatório e como |
| --- | --- |
| Taxa de vacância do mês | **Imóveis e Vacância**: conte os imóveis no grupo de status sem contrato contra o total. O painel já mostra o número pronto |
| Inadimplência por locatário | **Inadimplência** → já vem agrupado por **Contrato** (um contrato, um locatário). Para juntar os contratos de uma mesma pessoa, **Agrupar por → Adicionar grupo personalizado** → o campo do cliente |
| Inadimplência por mês de competência | **Inadimplência** → agrupe por **Competência** |
| Repasse de um proprietário no ano | **Repasses por Proprietário** → coluna de mês → some a linha dele |
| Receita da imobiliária com taxas no trimestre | **Retenção de Taxas** → colunas por mês |
| Contratos novos por corretor | **Agenciamentos** → no cabeçalho das linhas, troque **Gestor** por **Adicionar grupo personalizado → Corretor** |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| A posição do dia, sem montar relatório | [O painel de locação](/locacao/o-painel-de-locacao/) |
| Agir sobre um vencido | [Régua de cobrança](/locacao/regua-de-cobranca/) |
| Agir sobre um repasse | [Repasses ao proprietário](/locacao/repasses-ao-proprietario/) |
| Apurar a DIMOB | [DIMOB](/locacao/dimob/) |
