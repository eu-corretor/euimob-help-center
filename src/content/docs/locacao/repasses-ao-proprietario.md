---
title: "Repasses ao proprietário: liberar, reter, extrato"
description: "Como o repasse nasce da fatura paga, como liberar ou reter, registrar o pagamento ao proprietário e emitir o extrato."
secao: locacao
telas: [repasses]
quem: [financeiro]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** Locação → Operação → **Repasses**
**Atalho:** `/painel/repasses`
**Quem faz:** financeiro com acesso à Locação

> Um repasse é **uma fatura paga × um proprietário**. Imóvel com dois donos
> gera dois repasses, na fração de cada um. O dinheiro sai da conta da
> imobiliária por fora; aqui você registra que saiu.

---

## Passo a passo

1. **Locação → Operação → Repasses** → filtro **A liberar**
2. Abra o repasse → aba **Memória de cálculo**: **Aluguel recebido** da
   competência, menos **Taxa de administração** e, no primeiro mês, **Taxa de
   intermediação**. Embaixo, **Bruto**, **Deduções** e **Líquido**
3. Confira **Proprietário**, **Forma de repasse**, **Conta para repasse** e
   **Data do repasse**
4. Botão **Liberar** → a situação vira **Liberado** e o lançamento contábil ao
   proprietário é feito (cartão **Lançamento**)
5. Faça o PIX ou a TED no banco
6. Botão **Marcar como repassado** → informe **Pago em** e o **Comprovante**
7. Botão **Extrato** → PDF *Extrato de Repasse* para mandar ao proprietário

## Reter um repasse

Para segurar o dinheiro (reparo a descontar, pendência do proprietário):

1. Repasse em **Rascunho** → botão **Reter** → escreva o **Motivo da retenção**
2. Ele fica com a faixa **Retido** e não sai no lote, mesmo com repasse
   automático
3. Resolvido, botão **Liberar retenção** → depois **Liberar**

Para descontar um valor, acrescente uma linha de **Dedução** na memória de
cálculo enquanto o repasse estiver em Rascunho.

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Todo dia (robô *Locação: gerar repasses aos proprietários*) | Cria o repasse de cada fatura paga cuja **Data do repasse** chegou: o **Dia do repasse** do contrato, nunca antes do vencimento |
| O contrato tem **Repasse garantido** | O repasse nasce **antes** de o locatário pagar, com a faixa **Garantido** |
| O contrato tem **Repassar automaticamente** | O repasse já nasce **Liberado**, salvo se estiver retido |
| Você clica em **Liberar** | Gera o lançamento ao proprietário e o confirma |
| O contrato tem **Multa e juros para: Imobiliária** | Multa e juros pagos pelo locatário ficam com a imobiliária, não entram no bruto do proprietário |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *O repasse '…' está retido — motivo. Libere a retenção antes de aprová-lo* | Botão **Liberar retenção** e depois **Liberar** |
| *Só um repasse liberado pode ser marcado como repassado* | Clique em **Liberar** primeiro |
| *O repasse '…' já foi liberado e não pode ser excluído. Cancele-o para desfazer o lançamento* | Use **Cancelar**: ele desfaz o lançamento contábil |
| *Só um repasse cancelado volta para rascunho* | **Voltar a rascunho** só aparece em Cancelado |
| O repasse não apareceu | A fatura ainda não foi paga, ou a **Data do repasse** não chegou. Para antecipar, abra a fatura paga → **Gerar repasse** |
| Líquido zerado | A **Conta de aluguéis a repassar** não está configurada; o gestor usa **Criar conta e condição padrão** nas Configurações |

## Filtros que valem usar

| Filtro | Para quê |
| --- | --- |
| **A liberar** | O lote do dia do repasse |
| **Retidos** | O que você segurou e precisa resolver |
| **Garantidos** | O que a imobiliária adiantou com a fatura em aberto |
| **Liberados** | Pagos no banco e ainda sem comprovante registrado |
| Agrupar por **Proprietário** | Fechar com cada dono |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Repasses de um contrato | Cartão **Repasses** no alto do contrato ou da fatura |
| Total por proprietário no período | Locação → Relatórios → Repasses por Proprietário · `/painel/relatorio-repasses` |
| O que a imobiliária reteve de taxas | Locação → Relatórios → Retenção de Taxas · `/painel/relatorio-taxas-locacao` |
| Dia do repasse, automático e garantido | [Configurações de Locação](/locacao/configuracoes-de-locacao/) |
| Conta e forma de repasse do proprietário | [Cadastrar proprietário](/locacao/cadastrar-proprietario-e-padroes-de-contrato/) |
