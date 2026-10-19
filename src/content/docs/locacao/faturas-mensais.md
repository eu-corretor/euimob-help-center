---
title: "Faturas mensais: gerar, conferir e pausar a cobrança"
description: "Como as faturas de aluguel nascem, o que conferir todo mês, como antecipar uma fatura e como pausar a régua de cobrança de um locatário em negociação."
secao: locacao
telas: [faturas-locacao]
quem: [financeiro]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** Locação → Operação → **Faturas**
**Atalho:** `/painel/faturas-locacao`
**Quem faz:** financeiro com acesso à Locação

> A fatura de aluguel **nasce sozinha**, em rascunho, alguns dias antes do
> vencimento. O trabalho do mês é conferir, confirmar e cobrar. Não existe
> "pausar a geração": o que se pausa é a **régua de cobrança** de uma fatura.

---

## Passo a passo do mês

1. **Locação → Operação → Faturas** → filtro **Rascunho**
2. Abra cada fatura → confira **Locatário**, **Competência**, **Vencimento** e
   as linhas (aluguel e rubricas: IPTU, condomínio…)
3. Botão **Confirmar**. A régua de cobrança daquela fatura é agendada neste
   momento
4. Botão **Enviar** para mandar a fatura ao locatário. Se a imobiliária recebe
   pelo Asaas, use **Gerar Nova Cobrança** para emitir boleto e PIX
5. Durante o mês, filtro **Em aberto** (padrão da tela) e **Vencidas** para
   acompanhar; agrupe por **Competência** ou **Contrato**
6. Quando o locatário paga, registre o pagamento (**Pagar**). Pagamento pelo
   Asaas concilia sozinho

## Antecipar uma fatura

Abra o contrato → botão **Gerar fatura**. Ele emite todas as competências
cuja janela já abriu, até 24 de uma vez quando o contrato ficou para trás.

## Pausar e retomar a cobrança

Para o locatário que negociou prazo ou vai pagar por fora:

1. Abra a fatura confirmada e ainda em aberto → botão **Pausar cobrança**
2. Os passos da régua ficam parados enquanto a fatura estiver pausada
3. Resolvido, botão **Retomar cobrança**

A pausa só vale se a régua do contrato tiver **Pausar em negociação** marcado.
Sem isso, os avisos continuam saindo.

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Todo dia (robô *Locação: gerar faturas de aluguel*) | Cria a fatura de cada contrato **Ativo** cuja competência chegou na janela: **Dia do vencimento** menos **Emitir com antecedência (dias)** |
| Você confirma a fatura | Agenda cada passo da régua de cobrança em dia útil (lembrete antes do vencimento, aviso no dia, avisos de atraso) |
| O locatário paga | A fatura fica pronta para o repasse ao proprietário no próximo **Dia do repasse** |
| A competência é a primeira ou a última do contrato | Com **Primeira competência: Proporcional aos dias**, cobra só os dias ocupados |

Contrato **Em renovação** ou **Em rescisão** **não** gera fatura. Volte-o a
Ativo ou gere a fatura à mão.

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *Nenhuma competência está na janela de emissão destes contratos* | A próxima fatura ainda não chegou na antecedência. Veja **Próxima fatura** na aba Faturamento do contrato |
| *A gestão de aluguel não está contratada para …* | A Locação não está no plano. Fale com o suporte |
| A fatura do mês não apareceu | Contrato não está **Ativo**, ou a antecedência ainda não chegou. Confira a situação e a **Próxima fatura** |
| Valor errado na fatura em rascunho | Corrija as linhas na própria fatura antes de confirmar. Para os meses seguintes, ajuste as **Rubricas** ou o **Aluguel** no contrato |
| **Pausar cobrança** não aparece | A fatura não está confirmada, ou já foi paga |
| *Nenhuma destas faturas está pronta para repasse: ou já foi repassada, ou o locatário ainda não pagou* | O botão **Gerar repasse** só vale para fatura paga (ou contrato com **Repasse garantido**) |

## Filtros que valem usar

| Filtro | Para quê |
| --- | --- |
| **Rascunho** | O lote do mês para conferir e confirmar |
| **Em aberto** | Tudo que ainda não entrou |
| **Vencidas** | A cobrança do dia |
| Agrupar por **Competência** | Fechar o mês |
| Agrupar por **Contrato** | Ver o histórico de um locatário |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Ver os avisos de cobrança desta fatura | Cartão **Cobranças** no alto da fatura |
| Ver o repasse desta fatura | Cartão **Repasses** no alto da fatura |
| Montar e acompanhar a régua | [Régua de cobrança](/locacao/regua-de-cobranca/) |
| Liberar o repasse | [Repasses ao proprietário](/locacao/repasses-ao-proprietario/) |
| Mudar dia de vencimento e antecedência | [Configurações de Locação](/locacao/configuracoes-de-locacao/) |
