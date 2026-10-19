---
title: "Cadastrar proprietário e padrões de contrato"
description: "Como cadastrar o proprietário de um imóvel com a forma de repasse e montar os padrões que os contratos novos herdam."
secao: locacao
telas: [proprietarios, padroes-contrato-locacao]
quem: [gestor]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** Locação → Cadastros → **Proprietários** · Locação → Cadastros →
**Padrões de Contrato**
**Atalho:** `/painel/proprietarios` · `/painel/padroes-contrato-locacao`
**Quem faz:** o proprietário, quem tem acesso à Locação; o padrão de contrato,
só o gestor

> Um contrato **não ativa sem proprietário** no imóvel, e o repasse vai para a
> conta cadastrada aqui. Faça este cadastro antes do primeiro contrato.

---

## Parte 1 — O proprietário

1. Cadastre a pessoa em **Contatos**, com CPF ou CNPJ e endereço (a DIMOB
   recusa proprietário sem documento válido)
2. No cadastro do contato, abra a aba **Faturamento** → **Contas bancárias** →
   informe a conta que vai receber o repasse. Essa aba só aparece para quem
   tem o Financeiro; sem ele, peça ao financeiro para cadastrar a conta
3. **Locação → Cadastros → Proprietários → Adicionar linha**
4. Preencha: **Imóvel**, **Proprietário**, **Fração (%)**
5. **Forma de repasse**: PIX, TED ou Manual
6. **Conta para repasse**: escolha uma conta **do próprio proprietário**
7. Salve. Imóvel com mais de um dono: uma linha por pessoa, frações somando
   100%

O mesmo quadro **Proprietários** aparece dentro do cadastro do imóvel. Tanto
faz onde editar: é o mesmo registro.

## Parte 2 — O padrão de contrato

1. **Locação → Cadastros → Padrões de Contrato → Novo**
2. Dê um nome que a equipe reconheça (*Residencial 30 meses*)
3. Grupo **Contrato**: **Finalidade** (Residencial, Comercial ou Temporada),
   **Prazo (meses)**, **Primeira competência** (Proporcional aos dias ou Mês
   cheio), **Declarar na DIMOB**
4. Grupo **Taxas**: **Taxa de administração (%)**, **Taxa de intermediação (%)**,
   **Taxa bancária**
5. Grupo **Recorrência**: **Recorrência** (Mensal ou Anual) e **A cada**,
   **Momento do faturamento** (Pré-pago, no início do período, ou Pós-pago, no
   fim), **Dia do vencimento**, **Emitir com antecedência (dias)**, **Condição
   de pagamento**, **Régua de cobrança**
6. Grupo **Encargos e repasse**: **Multa por atraso (%)**, **Juros ao mês (%)**,
   **Multa de rescisão (aluguéis)**, **Carência da multa (meses)**, **Dia do
   repasse**, **Repassar automaticamente**, **Repasse garantido**, **Multa e
   juros para** (Locador ou Imobiliária)
7. Grupo **Reajuste**: **Índice de reajuste** e **Periodicidade do reajuste
   (meses)**
8. Aba **Rubricas** → **Adicionar linha** → o que compõe a cobrança mensal:
   **Rubrica** (Aluguel, IPTU, Condomínio, Seguro incêndio, Taxa de garantia,
   Taxa bancária, Manutenção, Reembolso de benfeitoria, Fundo de reserva, Multa
   e juros, Outros), **Descrição**, **Valor**, **Proporcional**
9. Salve

Crie um padrão por tipo de carteira (residencial, comercial, temporada). O
valor do aluguel não existe no padrão: ele é de cada contrato. Não crie uma
rubrica **Aluguel** no padrão; a cobrança usa o campo **Aluguel** do contrato.

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Você escolhe o **Padrão de contrato** num contrato | Copia todos os termos e as rubricas para o contrato. Depois disso, o que você mudar no contrato não volta para o padrão, e vice-versa |
| Você cria um padrão | Taxa, antecedência, condição, régua, dia do repasse, índice e periodicidade já vêm preenchidos das Configurações |
| Você deixa a régua ou o índice em branco no padrão | O contrato que usar esse padrão fica **sem** régua ou **sem** índice: o padrão substitui tudo, inclusive os brancos. Preencha os dois |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *A conta para repasse precisa ser do próprio proprietário: …* | A conta escolhida está no nome de outra pessoa. Cadastre a conta no contato do proprietário e escolha essa |
| Não encontro a conta no campo **Conta para repasse** | O campo não cria conta. Cadastre antes no contato (aba Faturamento → Contas bancárias) |
| *O imóvel … não tem proprietário* ao ativar um contrato | Volte aqui e cadastre o proprietário daquele imóvel |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Cadastrar a pessoa antes | [Cadastrar um contato](/contatos/cadastrar-um-contato/) |
| Ver os proprietários de um imóvel | Imóveis → abra o imóvel → quadro **Proprietários** |
| Definir os padrões da imobiliária (taxa, dia do repasse, régua, índice) | [Configurações de Locação](/locacao/configuracoes-de-locacao/) |
| Usar o padrão num contrato | [Gerar o contrato a partir da oportunidade](/locacao/gerar-o-contrato-a-partir-da-oportunidade/) |
