---
title: "Cadastrar um cliente no pipeline"
description: "Como registrar um cliente que chegou por telefone, plantão ou indicação e acompanhá-lo no funil até o ganho."
secao: crm
telas: [pipeline]
quem: [corretor]
funcionalidade: crm
verificado_em: 2026-09-30
versao_sistema: "19.0-2026.09"
---

**Caminho:** CRM → Vendas → Pipeline → **+** na primeira coluna
**Atalho:** `/odoo/pipeline`
**Quem faz:** vendedor ou captador

> Lead que vem do site ou dos portais **já entra sozinho** no Pipeline. Este
> guia é para quem chegou por telefone, plantão ou indicação.

---

## Passo a passo

1. **Menu lateral → CRM**
2. Clique no **Novo** em azul
3. Preencha: **Imóvel**, **Contato**, **Receita
   Esperada**
4. **Adicionar** → clique no cartão criado
5. Entre no lead
6. Confira **Corretor**, **Captador** e **Previsão de Fechamento**
7. Aba **Imóveis** → escolha o **Imóvel Principal** e liste os **Imóveis de
   Interesse**
8. Aba **Visitas** → **Agendar Visita** → imóvel + data
9. Depois da visita, volte e escreva o **Feedback**
10. Arraste o cartão para a próxima etapa conforme o negócio anda
11. Fechou? Aba **Fechamento** → valor e contrato → botão **Ganho**

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Cartão criado sem corretor | Vai para quem já atendeu esse cliente antes; se for cliente novo, entra na roleta |
| Você escolhe o Imóvel Principal | Copia o **Captador** do imóvel e preenche a **Receita Esperada** com o preço |
| Você agenda uma visita | Cria o compromisso na agenda e convida o cliente |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *…o estágio X exige ao menos um imóvel vinculado* | Aba Imóveis → vincule um imóvel |
| *…exige ao menos uma visita registrada* | Aba Visitas → agende ou registre a visita |
| *…exige contrato assinado* | Aba Fechamento → marque **Contrato Assinado** |

## Filtros que valem usar

| Filtro | Para quê |
| --- | --- |
| Minhas Oportunidades | Sua carteira |
| **Paradas** | Clientes esquecidos há tempo demais — abra toda segunda |
| Sem Visita | Quem só conversou e ainda não viu imóvel |
| Sem Corretor | Cartões órfãos |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Ver todas as visitas da equipe | CRM → Vendas → Visitas · `/odoo/visitas` |
| Ver suas atividades do dia | CRM → Vendas → Atividades · `/odoo/atividades` |
| Faturar a comissão do negócio ganho | [Faturar a comissão](/financeiro/faturar-a-comissao/) |

