---
title: "Configurações de Locação: taxa de administração, dia do repasse, periodicidade"
description: "O que configurar antes do primeiro contrato: habilitação, contabilidade, faturamento, cobrança, checklist, repasse e reajuste."
secao: locacao
telas: [configuracoes-gerais]
quem: [gestor]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** Configurações → **Configurações Gerais** → aba **Locação**
**Atalho:** `/painel/configuracoes-gerais`
**Quem faz:** só o gestor

> O que está aqui vira o **padrão dos contratos novos**. Contrato já criado
> guarda os valores dele: para mudar um contrato, edite a aba Faturamento
> dele.

---

## Passo a passo

1. **Configurações → Configurações Gerais → aba Locação**
2. **Habilitação**: marque **Régua de cobrança** e **DIMOB** conforme a
   imobiliária usa
3. **Contabilidade**: botão **Criar conta e condição padrão**. Ele cria a
   conta **Aluguéis a Repassar**, a conta **Receitas de Administração de
   Locação** e a condição de pagamento **Aluguel**. Quem já tem plano de contas
   próprio escolhe nos campos **Conta de aluguéis a repassar**, **Conta de
   receita da administração** e **Condição de pagamento do aluguel**
4. **Faturamento**: **Taxa de administração (%)** e **Emitir fatura com
   antecedência (dias)**
5. **Cobrança** (aparece com a régua ligada): botão **Criar régua padrão** e
   confira **Régua de cobrança padrão**
6. **Checklist documental**: botão **Carregar documentos padrão**
7. **Repasse ao proprietário**: **Dia do repasse**, **Multa e juros para**
   (Locador ou Imobiliária), **Repassar automaticamente**, **Repasse
   garantido**
8. **Reajuste**: **Índice de reajuste padrão** e **Periodicidade do reajuste
   (meses)**
9. Salve

## O que cada campo decide

| Campo | Efeito |
| --- | --- |
| **Régua de cobrança** | Desligada, os avisos de cobrança não saem, mesmo com régua no contrato |
| **DIMOB** | Desligada, a tela DIMOB recusa apurar |
| **Conta de aluguéis a repassar** | Onde o aluguel recebido fica guardado até o repasse. Sem ela, o repasse sai zerado |
| **Conta de receita da administração** | Onde entram a taxa de administração e, se **Multa e juros para** for Imobiliária, a multa e os juros |
| **Taxa de administração (%)** | Desconto do repasse. Vai para o contrato novo; o padrão de contrato pode sobrescrever |
| **Emitir fatura com antecedência (dias)** | Quantos dias antes do vencimento a fatura nasce |
| **Régua de cobrança padrão** | A régua dos contratos novos |
| **Dia do repasse** | Dia do mês em que o repasse nasce, nunca antes do vencimento do aluguel |
| **Multa e juros para** | Quem fica com multa e juros do locatário atrasado |
| **Repassar automaticamente** | Repasse nasce já **Liberado**; sem isto, alguém libera um a um |
| **Repasse garantido** | A imobiliária repassa mesmo sem o locatário pagar. Use com cuidado: é adiantamento |
| **Índice de reajuste padrão** e **Periodicidade** | Índice e intervalo dos contratos novos |

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Você cria um contrato ou um padrão de contrato | Taxa, antecedência, condição, régua, dia do repasse, automático, garantido, destino da multa, índice e periodicidade vêm preenchidos daqui |
| Você clica em **Criar conta e condição padrão** | Cria só o que falta; o que você já escolheu fica. O botão some quando tudo está preenchido |
| Você clica em **Criar régua padrão** | Cria a régua com cinco passos e a põe como padrão; some quando já há uma |
| Você clica em **Carregar documentos padrão** | Acrescenta os documentos que ainda não existem; não apaga nem renomeia os seus |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| Não vejo a aba **Locação** | A Locação não está no plano, ou você não é gestor |
| O grupo **Cobrança** não aparece | Marque **Régua de cobrança** em Habilitação e salve |
| Mudei a taxa e o contrato antigo não mudou | Esperado. Edite o contrato (aba Faturamento) ou o padrão de contrato |
| Repasse sai zerado | Falta a **Conta de aluguéis a repassar**: clique em **Criar conta e condição padrão** |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Padrões por tipo de carteira (residencial, comercial) | [Cadastrar proprietário e padrões de contrato](/locacao/cadastrar-proprietario-e-padroes-de-contrato/) |
| Editar a régua criada | Locação → Cadastros → Réguas de Cobrança · `/painel/regua-cobranca` |
| Editar a lista de documentos | Locação → Cadastros → Checklist Documental · `/painel/documentos-locacao` |
| Publicar os índices | Locação → Cadastros → Índices Econômicos · `/painel/indices-economicos` |
| Ver o plano e quem tem acesso à Locação | Configurações → Plano |
