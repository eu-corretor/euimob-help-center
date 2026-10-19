---
title: "Reajuste: preparar, aplicar, aviso ao locatário"
description: "Como o reajuste anual é preparado pelo índice, como aplicar ou combinar um valor à mão, e como avisar locatário e proprietário."
secao: locacao
telas: [reajustes, indices-economicos]
quem: [financeiro]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** Locação → Operação → **Reajustes**
**Atalho:** `/painel/reajustes` · índices em `/painel/indices-economicos`
**Quem faz:** financeiro com acesso à Locação; o gestor publica os índices

> O reajuste é preparado **30 dias antes** do aniversário do contrato e
> aplicado sozinho na véspera da emissão da fatura daquela competência, se o
> índice estiver completo. O que você faz é conferir e, quando for o caso,
> negociar o valor.

---

## Passo a passo

1. **Locação → Operação → Reajustes** → filtro **A aplicar**
2. Abra o reajuste → **Vigência** é a data do aniversário
3. Grupo **Apuração**: **Índice**, **Meses acumulados**, o período apurado e o
   **Índice acumulado (%)**
4. Grupo **Valores**: **Aluguel anterior**, **Percentual aplicado (%)** e
   **Novo aluguel**
5. Negociou outro valor? Digite o **Novo aluguel** à mão. O reajuste ganha a
   faixa **Ajustado à mão**. Com o índice incompleto, o robô não aplica o
   valor digitado: clique em **Aplicar**
6. Botão **Aplicar** → o aluguel do contrato muda e as partes recebem o e-mail
   *Reajuste do aluguel a partir de mm/aaaa*. Aplique à mão só depois que a
   fatura da competência anterior já saiu: o valor novo vale para qualquer
   fatura emitida dali em diante
7. Para mandar o aviso de novo, botão **Reenviar aviso**

Para preparar antes dos 30 dias: abra o contrato → botão **Preparar reajuste**.

## Publicar o índice do mês

Quem não tem o mês publicado trava o reajuste. **Locação → Cadastros → Índices
Econômicos** → abra o índice (IGP-M, IPCA, INPC, IGP-DI e CUB já existem) →
**Série mensal** → **Adicionar linha** → **Competência** (sempre o dia 1 do
mês) e **Variação no mês (%)**. Só o gestor edita.

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Todo dia (robô *Locação: preparar e aplicar reajustes*) | Prepara o reajuste dos contratos a 30 dias do aniversário e aplica, da véspera da emissão da fatura da competência de vigência em diante, os que estão com o índice completo. Assim a fatura já sai com o valor novo |
| O índice não publicou algum mês | O reajuste fica em rascunho com o aviso *O índice ainda não publicou as competências …* e o filtro **Índice incompleto** o encontra. O robô não o aplica, mesmo com **Novo aluguel** digitado |
| Você aplica | Grava o novo aluguel, agenda o **Próximo reajuste** (vigência mais os **Meses acumulados**), escreve no histórico do contrato e avisa locatário e proprietários por e-mail |
| Você cancela | Pula este aniversário: o próximo reajuste vai para a data seguinte. **Voltar a rascunho** desfaz |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *O índice … ainda não tem as competências …. Publique os valores ou combine o novo aluguel à mão* | Publique o mês nos Índices Econômicos, ou digite o **Novo aluguel** |
| *A competência de mm/aaaa do contrato '…' já foi faturada. Cancele a fatura antes de aplicar o reajuste* | A fatura do mês da vigência já existe. Cancele-a, aplique o reajuste e gere a fatura de novo |
| *O reajuste de '…' está zerado. Informe o novo aluguel antes de aplicá-lo* | **Novo aluguel** está zero: o **Aluguel anterior** estava em branco ou o valor foi apagado. Digite o **Novo aluguel** |
| *Nenhum destes contratos tem aniversário pendente de reajuste* | O **Próximo reajuste** do contrato está em branco, cai depois do **Fim**, ou já existe um reajuste para essa data |
| *Só um reajuste aplicado pode ser comunicado* | **Reenviar aviso** só vale depois de **Aplicar** |
| *A competência do índice é o primeiro dia do mês. Corrija dd/mm/aaaa* | Na série mensal, use o dia 1 |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Reajustes de um contrato | Cartão **Reajustes** no alto do contrato |
| Reajustes previstos por mês | Locação → Relatórios → Reajustes do Período · `/painel/relatorio-reajustes` |
| Índice e periodicidade de um contrato | Abra o contrato → aba **Faturamento** → grupo **Reajuste** |
| Índice e periodicidade padrão | [Configurações de Locação](/locacao/configuracoes-de-locacao/) |
