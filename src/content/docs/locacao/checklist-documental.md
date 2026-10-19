---
title: "Checklist documental: carregar e conferir"
description: "Como marcar uma oportunidade como locação, carregar a lista de documentos e conferir o que já chegou antes de gerar o contrato."
secao: locacao
telas: [pipeline, documentos-locacao]
quem: [corretor]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** CRM → Pipeline → abra a oportunidade → aba **Locação**
**Atalho:** `/painel/pipeline`
**Quem faz:** corretor com acesso à Locação

> A aba **Locação** só aparece quando o **Imóvel Principal** da oportunidade
> aceita aluguel ou temporada. Oportunidade sem imóvel ainda mostra a aba.

---

## Passo a passo

1. Abra a oportunidade → confira o **Imóvel Principal** e o **Contato**
2. Aba **Locação** → marque **Oportunidade de locação**
3. Escolha a **Garantia pretendida** (Fiador, Caução, Seguro fiança, Cessão
   fiduciária, Título de capitalização, CredPago ou Sem garantia)
4. Botão **Carregar checklist** → a lista de documentos da imobiliária entra
   na aba
5. Em cada linha, informe o **Titular**: quem entrega aquele documento. Na
   garantia por fiador, o fiador **tem de ser o titular** de um documento da
   linha *Fiador*; é daí que o contrato o lê
6. Conforme os documentos chegam, marque **Recebido**. A data entra sozinha em
   **Recebido em**
7. Use **Observação** para o que faltou ou veio incompleto
8. Acompanhe a barra **Checklist documental** e a marca **Documentação
   completa**
9. Com tudo recebido, siga para [Gerar o contrato](/locacao/gerar-o-contrato-a-partir-da-oportunidade/)

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Você clica em **Carregar checklist** | Traz os documentos cadastrados pela imobiliária, sem apagar o que já estava marcado. Pode clicar de novo depois que o gestor acrescentar um documento |
| Você marca **Recebido** | Preenche **Recebido em** com a data de hoje |
| Todos os obrigatórios estão recebidos | **Documentação completa** fica marcada |

## Quem define a lista

A lista é da imobiliária e fica em **Locação → Cadastros → Checklist
Documental** (`/painel/documentos-locacao`). Só o gestor edita. Cada documento
tem **De quem** (Locatário, Fiador ou Proprietário) e **Obrigatório**.

Para começar com a lista padrão, o gestor vai em **Configurações → Configurações
Gerais → aba Locação → Carregar documentos padrão**. Ela traz identidade, CPF,
comprovantes de residência e renda e certidão de estado civil do locatário;
identidade, renda e matrícula do imóvel do fiador; matrícula, IPTU e dados
bancários do proprietário.

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| Não vejo a aba **Locação** | O Imóvel Principal é só de venda. Troque o imóvel ou marque Aluguel no cadastro dele |
| **Carregar checklist** não traz nada | A imobiliária ainda não tem documentos cadastrados. Peça ao gestor para carregar os padrão |
| *A garantia de … é fiança, então informe o fiador no titular de um documento do checklist antes de gerar o contrato* | Numa linha de documento do fiador, preencha **Titular** com o contato do fiador |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Cadastrar o fiador ou o locatário | [Cadastrar um contato](/contatos/cadastrar-um-contato/) |
| Acompanhar a oportunidade no funil | [Cadastrar um cliente no pipeline](/crm/cadastrar-um-cliente-no-pipeline/) |
| Ver todas as oportunidades de locação | Locação → Relatórios → Funil de Locação · `/painel/relatorio-funil-locacao` |
