---
title: "Gerar o contrato a partir da oportunidade"
description: "Como transformar a oportunidade de locação num contrato em rascunho e preencher as abas do contrato antes da assinatura."
secao: locacao
telas: [pipeline, contratos-locacao]
quem: [corretor]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** CRM → Pipeline → oportunidade → botão **Gerar Contrato**
**Atalho:** `/painel/pipeline` · contratos em `/painel/contratos-locacao`
**Quem faz:** corretor com acesso à Locação

> O contrato nasce **em rascunho**, com o imóvel, o locatário, a garantia e os
> proprietários da oportunidade. Nada é cobrado até alguém clicar em
> **Ativar**.

---

## Passo a passo

1. Na oportunidade, confira **Imóvel Principal**, **Contato** e a aba
   **Locação** (oportunidade marcada, garantia escolhida, checklist conferido)
2. Botão **Gerar Contrato** → o contrato abre
3. Escolha o **Padrão de contrato** → ele preenche prazos, taxas, recorrência
   e rubricas
4. Grupo **Partes**: confira **Imóvel**, **Locatário**; acrescente
   **Corresponsáveis** e **Fiadores** se houver
5. Grupo **Vigência**: **Início**, **Prazo (meses)** (o **Fim** é calculado),
   **Finalidade**
6. Grupo **Responsáveis**: **Gestor da carteira** e **Corretor**
7. Grupo **Valores**: digite o **Aluguel**. O **Total mensal** soma o aluguel
   às rubricas
8. Aba **Rubricas** → ajuste o que entra na cobrança deste contrato (IPTU,
   condomínio, seguro…), com **Valor** e **Proporcional**
9. Aba **Garantias** → **Adicionar linha** → **Modalidade** (Fiador, Caução,
   Seguro fiança, Cessão fiduciária, Título de capitalização, CredPago ou Sem
   garantia), **Prestador**, **Número/apólice**, **Valor garantido**, vigência.
   Abaixo, **Seguro incêndio**: seguradora, apólice, valor, prêmio, parcelas,
   vigência
10. Aba **Ocupantes** → quem mora no imóvel além do locatário (nome, documento,
    nascimento, parentesco)
11. Aba **Faturamento** → confira **Dia do vencimento**, **Emitir com
    antecedência (dias)**, **Régua de cobrança**, **Dia do repasse**, **Índice
    de reajuste** e **Periodicidade do reajuste (meses)**
12. Salve. O contrato recebe um número (*LOC-2026/0001*) e segue para
    [Enviar para assinatura e ativar](/locacao/enviar-para-assinatura-e-ativar/)

A aba **Proprietários** é só leitura: vem do cadastro do imóvel. A aba
**Aditivos** fica para depois, quando o contrato mudar (valor, prazo, partes
ou garantia).

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Você clica em **Gerar Contrato** | Cria o contrato ligado à oportunidade (campo **Oportunidade de origem**) e o botão some, para não gerar dois |
| Você escolhe o **Padrão de contrato** | Copia termos e rubricas do padrão; o que estava nas rubricas é substituído |
| Você informa **Início** e **Prazo** | Calcula o **Fim** |
| A garantia da oportunidade é fiador | Traz como **Fiadores** os titulares dos documentos de fiador do checklist |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *… não está marcada como oportunidade de locação* | Aba Locação → marque **Oportunidade de locação** |
| *Informe o imóvel principal de … antes de gerar o contrato de locação* | Aba Imóveis → escolha o **Imóvel Principal** |
| *Informe o cliente de … antes de gerar o contrato de locação* | Preencha o **Contato** da oportunidade |
| *… já gerou o contrato LOC-…* | O contrato existe. Abra pelo botão **Locação** no alto da oportunidade |
| *A garantia de … é fiança, então informe o fiador no titular de um documento do checklist* | Aba Locação → numa linha de documento do fiador, preencha **Titular** |
| *A garantia do contrato … é do tipo Fiador, então ao menos um fiador precisa ser informado* | Grupo Partes → preencha **Fiadores** |
| *O fim do contrato … não pode ser anterior ao início* | Corrija **Início** ou **Prazo** |
| *… é proprietário do imóvel … e não pode ser o locatário do mesmo contrato* | O locatário escolhido é dono do imóvel. Troque o **Locatário** |
| Não vejo o botão **Gerar Contrato** | Falta acesso à Locação, ou a oportunidade não está marcada como locação |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Criar um contrato sem oportunidade | Locação → Operação → Contratos → **Novo** · `/painel/contratos-locacao` |
| Ver os contratos da oportunidade | Botão **Locação** no alto da oportunidade |
| Conferir os documentos antes | [Checklist documental](/locacao/checklist-documental/) |
| Montar os padrões que o contrato herda | [Cadastrar proprietário e padrões de contrato](/locacao/cadastrar-proprietario-e-padroes-de-contrato/) |
