---
title: "Cadastrar um contato"
description: "Como cadastrar uma pessoa ou empresa em Contatos, com CPF/CNPJ e endereço pelo CEP."
secao: contatos
telas: [contacts]
quem: [corretor]
funcionalidade: contatos
verificado_em: 2026-09-30
versao_sistema: "19.0-2026.09"
---

**Caminho:** Contatos → **Novo**
**Atalho:** `/odoo/contacts`
**Quem faz:** qualquer corretor

---

## Antes: procure

Digite o **CPF ou o telefone** na busca. Se a pessoa já existe, use a ficha dela.
A busca acha por nome, CPF/CNPJ (com ou sem ponto), e-mail e telefone.

## Passo a passo

1. **Contatos → Novo**
2. Escolha **Pessoa** ou **Empresa**
3. Digite o **Nome**
4. Marque o **Tipo**: Proprietário, Cliente, Investidor ou Construtora
5. Preencha **Telefone**, **E-mail**, **Corretor** e **Origem**
6. Digite o **CPF/CNPJ** — a plataforma formata sozinha
7. Aba **Endereço**: digite o **CEP** → rua, bairro, cidade e estado preenchem
   sozinhos. Complete número e complemento
8. Aba **Dados Pessoais**: data de nascimento, estado civil, RG
9. Aba **Financeiro** (só cliente comprador): renda, forma de pagamento, crédito
   pré-aprovado
10. **Salvar**

## Campos que importam

| Campo | Por quê |
| --- | --- |
| Nome | Único obrigatório |
| Tipo | Separa a carteira: proprietário × cliente |
| Corretor | Sem ele, a ficha fica órfã |
| Telefone | É como você acha a pessoa depois |
| Data de nascimento | Liga o filtro *Aniversariantes do Mês* |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *CPF inválido para o parceiro…* | Número digitado errado. Confira com o cliente |
| *O CPF/CNPJ já está cadastrado para o parceiro X* | A ficha existe. Cancele e use a do X |
| Bairro errado depois do CEP | Corrija na mão |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Criar novos Tipos de Contato (gestor) | Contatos → Configuração → Tipos de Contato · `/odoo/tipos-de-contato` |
| Tirar alguém da lista sem apagar | Abra o contato → menu de ações → **Arquivar** |

