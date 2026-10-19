---
title: "Renovação de contrato"
description: "Como renovar um contrato que chegou ao fim: iniciar a renovação, registrar o aditivo com o novo prazo e valor, e reativar."
secao: locacao
telas: [contratos-locacao]
quem: [gestor]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** Locação → Operação → **Contratos** → contrato **Ativo** → botão
**Iniciar renovação**
**Atalho:** `/painel/contratos-locacao`
**Quem faz:** gestor com acesso à Locação

> A renovação acontece **no mesmo contrato**: ele entra em **Em renovação**,
> você muda prazo e valor, registra o aditivo e clica em **Ativar** de novo.
> Enquanto está em renovação, **a fatura do mês não sai**. Faça tudo numa
> sentada, antes da próxima emissão.

---

## Passo a passo

1. Abra o contrato → confira **Fim** e **Próxima fatura** (aba
   **Faturamento**) para saber quanto tempo tem
2. Botão **Iniciar renovação** → a situação vira **Em renovação**
3. Grupo **Vigência**: ajuste **Prazo (meses)** ou **Fim**
4. Grupo **Valores**: se o aluguel mudou fora do reajuste, digite o novo
   **Aluguel**
5. Aba **Garantias**: renove a vigência da garantia e do **Seguro incêndio**
   (o painel aponta garantia vencida como contrato de pé sem cobertura)
6. Aba **Aditivos** → **Adicionar linha** → nome, tipo (Alteração de valor,
   Alteração de prazo, Alteração de partes, Alteração de garantia ou Outro),
   data e data de efeito, descrição
7. Precisa de assinatura do aditivo? Botão **Solicitar Assinatura Eletrônica**
   e suba o PDF do aditivo
8. Botão **Ativar** → o contrato volta a **Ativo** e a emissão segue do ponto
   em que parou

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Você clica em **Iniciar renovação** | Só muda a situação. O imóvel continua alugado e o contrato continua na carteira |
| Contrato em **Em renovação** no dia da emissão | O robô **pula** o contrato. A competência fica pendente e sai na primeira emissão depois de **Ativar** (ou pelo botão **Gerar fatura**) |
| Você clica em **Ativar** | Refaz as mesmas conferências da primeira ativação (aluguel, garantia, proprietário) e reagenda **Próxima fatura** e **Próximo reajuste** |
| O contrato chega ao **Fim** sem renovação | Nada muda sozinho: ele continua **Ativo** e para de faturar quando acaba a última competência. Renove ou [rescinda](/locacao/rescisao-e-termo-de-quitacao/) |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *O contrato … está em 'Em rescisão' e não pode ir para 'Em renovação'* | Há uma rescisão em andamento. Cancele a rescisão primeiro |
| *Informe a garantia do contrato … antes de ativá-lo* | Aba Garantias → a garantia foi removida; adicione uma linha |
| A fatura do mês não saiu | O contrato ficou em renovação na data da emissão. Clique em **Ativar** e depois em **Gerar fatura** |
| Quero renovar com outro locatário ou outro proprietário | Não é renovação: [rescinda](/locacao/rescisao-e-termo-de-quitacao/) este contrato e gere um novo |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Reajustar o valor pelo índice, sem renovar | [Reajuste do aluguel](/locacao/reajuste-do-aluguel/) |
| Encerrar em vez de renovar | [Rescisão e termo de quitação](/locacao/rescisao-e-termo-de-quitacao/) |
| Ver os contratos que vencem em breve | Locação → Operação → Contratos → filtro **Ativos** → agrupe ou ordene por **Fim** |
| Assinar o aditivo | [Enviar para assinatura e ativar](/locacao/enviar-para-assinatura-e-ativar/) |
