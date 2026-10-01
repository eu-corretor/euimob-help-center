---
title: "Faturar a comissão"
description: "Como gerar as faturas de comissão de um negócio ganho, com rateio, e emitir a cobrança."
secao: financeiro
telas: [pipeline, customer-invoices]
quem: [financeiro, gestor]
funcionalidade: financeiro
verificado_em: 2026-09-30
versao_sistema: "19.0-2026.09"
---

**Caminho:** CRM → Pipeline → oportunidade **Ganho** → botão **Gerar
Faturamento**
**Atalho:** `/odoo/pipeline` · faturas em `/odoo/customer-invoices`
**Quem faz:** financeiro (com permissão de faturamento)

> A fatura de comissão **não se cria do zero**. Ela nasce do negócio ganho.

---

## Passo a passo

1. Abra a oportunidade → aba **Fechamento** → confira **Valor de Fechamento** e
   **Comissão (%)**
2. Botão **Ganho**
3. Botão **Gerar Faturamento**
4. Escolha o **Proprietário do Imóvel** (quem recebe a fatura)
5. Confira o **Valor a Faturar**
6. Ajuste o **rateio** (corretor, captador, gerente) — a soma não pode passar de
   100%
7. Marque **Marcar imóvel como vendido**, se for o caso
8. **Confirmar e Gerar Faturas**
9. Abra a fatura do proprietário → **Confirmar**
10. Botão **Gerar Cobrança Asaas** → copie o boleto, o PIX ou o link e mande ao
    cliente

## O que é gerado

| Documento | Para quem |
| --- | --- |
| 1 fatura de cliente | Proprietário do imóvel — a comissão a receber |
| N faturas de fornecedor | Cada participante do rateio — o que a casa paga |

O que sobra do rateio é o **Saldo da Imobiliária**.

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Você gera a cobrança | Cria o cliente no Asaas (sem duplicar) e busca boleto e PIX |
| O cliente paga | A fatura é conciliada automaticamente. **Não dê baixa manual** |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *Apenas usuários com permissão financeira podem gerar o faturamento* | Falta permissão de faturamento — peça ao gestor |
| *Somente faturas de cliente confirmadas podem gerar cobrança Asaas* | A fatura está em rascunho. Confirme |
| *A fatura não possui valor em aberto para cobrança* | Já foi paga ou baixada |
| *Já existe uma cobrança Asaas ativa para esta fatura* | Cancele a cobrança anterior |
| *A soma das porcentagens do rateio não pode ultrapassar 100%* | Reduza os percentuais |
| *Esta oportunidade já possui faturamento de honorários gerado* | Cancele as faturas e gere de novo |
| *Configure um plano de contas…* | Contabilidade não configurada — tarefa do gestor |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Ver as faturas do negócio | Botão **Honorários** no alto da oportunidade |
| Faturas de cliente | Faturamento → Clientes → Faturas · `/odoo/customer-invoices` |
| Cobranças emitidas | `/odoo/cobrancas-asaas` |
| Cancelar uma cobrança | Abra a cobrança → **Cancelar Cobrança** (não vale para paga) |

