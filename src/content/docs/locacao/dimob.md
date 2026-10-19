---
title: "DIMOB: apurar o ano, gerar arquivo, enviar informes"
description: "Como apurar a DIMOB do ano-calendário, resolver as pendências da auditoria, gerar o arquivo da Receita e mandar o informe de rendimentos aos proprietários."
secao: locacao
telas: [dimob]
quem: [financeiro]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** Locação → Operação → **DIMOB**
**Atalho:** `/painel/dimob`
**Quem faz:** financeiro com permissão de faturamento e acesso à Locação

> A DIMOB lê, contrato por contrato, mês a mês, as competências do ano que
> estavam **pagas na hora da apuração**. Faça a apuração em janeiro, resolva as
> pendências, gere o arquivo e mande os informes antes do prazo da Receita.

---

## Passo a passo

1. Confira que **DIMOB** está ligada em Configurações → Configurações Gerais →
   aba Locação → **Habilitação**
2. **Locação → Operação → DIMOB → Novo**
3. **Ano-calendário**, **Tipo de declaração** (Normal) e **Responsável perante a
   RFB** (a pessoa física responsável pela declaração)
4. Botão **Apurar ano**
5. Aba **Auditoria Prévia** → resolva cada **Pendência**. As impeditivas (CPF
   ou CNPJ inválido, endereço incompleto, frações divergentes) travam o
   arquivo; as demais são avisos (contrato sem movimento, IRRF a conferir, que
   aparece sempre porque o IRRF é digitado depois)
6. Corrigiu cadastros? Botão **Apurar ano** de novo. A apuração é refeita do
   zero, inclusive o IRRF digitado
7. Aba **Fichas de Locação** → confira **Rendimento bruto**, **Comissão** e
   **IRRF** por contrato e mês. O **IRRF** pode ser digitado na linha: faça
   isso só depois da última apuração
8. Botão **Relatório de conferência** → PDF *Conferência da DIMOB* para a
   contabilidade
9. Botão **Gerar arquivo** → baixa o arquivo magnético (*DIMOB_ano_CNPJ.txt*)
   para importar no programa da Receita
10. Transmitiu? Digite o **Recibo da entrega** → botão **Marcar como entregue**
11. Botão **Enviar informes** → confirme a pergunta → cada proprietário recebe
    o e-mail *Informe de rendimentos de aluguéis — ano* com o PDF *Informe de
    Rendimentos*

## Retificadora

**Novo** → **Tipo de declaração: Retificadora** → **Recibo da declaração
anterior** (obrigatório) → o mesmo caminho. Cada ano comporta uma normal e
uma retificadora.

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Você apura | Monta uma ficha por contrato × proprietário × mês, só dos contratos com **Declarar na DIMOB** marcado, somando as competências do ano já pagas no momento da apuração (dezembro pago em janeiro entra no ano da competência), inclusive contratos já encerrados |
| Você apura | Roda a auditoria: CPF/CNPJ pela regra da Receita, endereço do imóvel, soma das frações dos proprietários, contratos sem pagamento, locatário pessoa jurídica com locador pessoa física |
| Você gera o arquivo | Só sai sem pendência impeditiva |
| Você envia os informes | Um e-mail por proprietário com rendimento no ano, com o PDF anexo; a data fica em **Informes enviados em** |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *A empresa '…' está com a DIMOB desabilitada nas configurações da locação* | Ligue **DIMOB** em Habilitação |
| *A DIMOB ano já existe para esta empresa. Cada ano comporta uma declaração normal e uma retificadora* | Abra a existente |
| *A DIMOB ano ainda não foi apurada. Rode a apuração antes de gerar o arquivo ou os informes* | Botão **Apurar ano** |
| *A DIMOB ano tem N pendência(s) impeditiva(s). Corrija o que a auditoria apontou antes de gerar o arquivo* | Aba Auditoria Prévia → corrija os cadastros → **Apurar ano** |
| *A declaração retificadora exige o número do recibo da declaração anterior* | Preencha **Recibo da declaração anterior** |
| *Informe o recibo da entrega da DIMOB ano antes de marcá-la como entregue* | Digite **Recibo da entrega** |
| *Sem e-mail para …. Cadastre o e-mail antes de enviar os informes* | Cadastre o e-mail no contato do proprietário e envie de novo |
| *A DIMOB ano não tem proprietários com rendimento a informar* | Nenhum contrato marcado para a DIMOB teve pagamento no ano |
| *A DIMOB ano já foi entregue e não pode ser excluída* | Entregue é definitiva. Para corrigir, faça uma retificadora |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Rendimentos por proprietário e mês | Locação → Relatórios → Rendimentos Declarados · `/painel/relatorio-dimob` |
| Tirar um contrato da DIMOB | Abra o contrato → aba **Faturamento** → desmarque **Declarar na DIMOB** (vem marcado) |
| Imóvel rural (campo exigido no arquivo) | Imóveis → Configuração → Tipos de Imóvel → **Rural na DIMOB** (Chácara e Fazenda/Sítio/Chácara já vêm marcados) |
| Corrigir CPF/CNPJ e endereço | [Cadastrar um contato](/contatos/cadastrar-um-contato/) · [Cadastrar um imóvel](/imoveis/cadastrar-um-imovel/) |
| Frações dos proprietários | [Cadastrar proprietário](/locacao/cadastrar-proprietario-e-padroes-de-contrato/) |
