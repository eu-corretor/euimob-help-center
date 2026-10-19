---
title: "Enviar o contrato para assinatura e ativar"
description: "Como mandar o contrato para assinatura eletrônica, acompanhar quem já assinou e ativar a locação para começar a faturar."
secao: locacao
telas: [contratos-locacao]
quem: [corretor, gestor]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** Locação → Operação → **Contratos** → abra o contrato
**Atalho:** `/painel/contratos-locacao`
**Quem faz:** corretor envia para assinatura; gestor ou corretor ativa

> A assinatura **não ativa** o contrato. Quando todos assinarem, uma nota entra
> no histórico do contrato e alguém clica em **Ativar**. É a partir daí que
> faturas, régua e repasses passam a existir.

---

## Passo a passo

1. Abra o contrato em **Rascunho** → botão **Enviar para assinatura**. A
   situação vira **Em assinatura**
2. Botão **Solicitar Assinatura Eletrônica** → abre a solicitação já ligada ao
   contrato
3. Aba **Documentos** → suba o PDF do contrato que a imobiliária redigiu
4. Aba **Assinantes** → confira a lista: locatário, corresponsáveis, fiadores
   e proprietários já vêm preenchidos. Cada um precisa, no cadastro, de e-mail
   e de nome e sobrenome sem números
5. Escolha o **Provedor** (ClickSign ou DocuSign, com a conta da imobiliária) e
   o **Prazo**
6. Aba **Convite** → ajuste **Assunto** e **Mensagem** se quiser
7. Botão **Enviar para Assinatura**
8. Acompanhe pelo cartão **Assinaturas** no alto do contrato. A solicitação
   passa por **Enviando → Em assinatura → Concluída**. Se o envio falhar, ela
   fica em **Erro**: corrija a causa e clique em **Enviar para Assinatura** de
   novo
9. Com a solicitação **Concluída**, volte ao contrato → botão **Ativar**
10. Confira na aba **Faturamento** o campo **Próxima fatura**: é quando a
    primeira cobrança nasce

Contrato assinado em papel: pule os passos 2 a 8, anexe o PDF assinado no
histórico e clique em **Ativar**.

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Você clica em **Solicitar Assinatura Eletrônica** | Cria a solicitação com as partes do contrato como assinantes |
| Todos assinam | Registra uma nota no histórico do contrato com os PDFs assinados. O contrato **continua em assinatura** até você ativar |
| Alguém recusa ou o prazo vence | A solicitação fica **Recusada** ou **Expirada** e o contrato avisa no histórico. A plataforma fica sabendo pelo provedor, na hora ou na conferência diária |
| Você clica em **Ativar** | Marca o imóvel como alugado, agenda a **Próxima fatura** e o **Próximo reajuste** |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *Informe o valor do aluguel antes de ativar o contrato …* | Grupo Valores → preencha **Aluguel** |
| *Informe a garantia do contrato … antes de ativá-lo. Use a modalidade 'Sem garantia' quando não houver* | Aba Garantias → adicione uma linha, nem que seja **Sem garantia** |
| *O imóvel … não tem proprietário. Informe os proprietários no cadastro do imóvel antes de ativar o contrato …* | [Cadastre o proprietário](/locacao/cadastrar-proprietario-e-padroes-de-contrato/) e volte |
| *A gestão de aluguel não está contratada para …* | A Locação não está no plano da imobiliária. Fale com o suporte |
| *O contrato … está em 'Cancelado' e não pode ir para 'Ativo'* | Botão **Voltar para rascunho** e refaça o caminho |
| Não vejo **Solicitar Assinatura Eletrônica** | Você não tem acesso à Assinatura Eletrônica, ou o contrato não está em Rascunho nem Em assinatura. Peça o acesso ao gestor |
| *Escolha o provedor de assinatura antes de enviar* | Não há provedor cadastrado. O gestor cadastra em Assinatura Eletrônica → Configuração → Provedores · `/painel/provedores-assinatura` |
| *O contato … não tem e-mail* · *… precisa de nome e sobrenome para assinar* · *O nome do contato … tem números* | Abra o contato e corrija o e-mail ou o nome antes de enviar |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Ver todas as solicitações de assinatura | Assinatura Eletrônica → Documentos para Assinatura · `/painel/assinatura-eletronica` |
| Reenviar o convite a quem não assinou | Abra a solicitação → **Reenviar Convite** |
| Desistir do contrato antes de ativar | Botão **Cancelar** (só em Rascunho ou Em assinatura). **Voltar para rascunho** desfaz o cancelamento |
| Mudar o contrato depois de ativo | [Renovação de contrato](/locacao/renovacao-de-contrato/) ou [Rescisão](/locacao/rescisao-e-termo-de-quitacao/) |
| A primeira fatura | [Faturas mensais](/locacao/faturas-mensais/) |
