---
title: "Convidar um usuário"
description: "Como criar o acesso de uma pessoa da equipe, escolher os papéis e exigir a verificação em duas etapas."
secao: conta
telas: [usuarios]
quem: [gestor]
funcionalidade: administracao
verificado_em: 2026-09-30
versao_sistema: "19.0-2026.09"
---

**Caminho:** Configurações → Configuração → Usuários → **Novo**
**Atalho:** `/odoo/usuarios`
**Quem faz:** só o gestor

---

## Passo a passo

1. **Configurações → Configuração → Usuários → Novo**
2. Digite o **Nome completo**
3. Bloco **Acesso**: **Login** (use o e-mail), **E-mail**, **Telefone**,
   **Idioma**, **Fuso horário**
4. Bloco **Profissional**: **CRECI** (se for corretor)
5. Bloco **Papéis**: marque **todos** os que a função exige
6. **Salvar** → a pessoa recebe um convite por e-mail e cria a própria senha

## Os papéis

| Papel | Passa a poder |
| --- | --- |
| Captador | Cadastrar e editar imóveis, condomínios e visitas |
| Vendedor | O mesmo, e é o único não-gestor que exclui visita |
| Assistente | Cadastrar e editar, sem excluir imóvel |
| Financeiro | Cobranças e pagamentos. Não mexe em imóvel nem em lead |
| Gestor | Criar usuários, configurar, excluir imóvel, criar Tipos de Imóvel |

> **Os papéis não se somam sozinhos.** Gestor não inclui Vendedor. Quem capta e
> vende precisa das duas caixas marcadas.

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| Convite não chegou | A pessoa usa **Esqueci minha senha** na tela de login |
| *Você não pode atribuir usuários a uma empresa fora da sua imobiliária* | Você só cadastra gente na sua imobiliária |
| A pessoa não vê o menu de Usuários | Falta o papel **Gestor** |
| Horário de visita aparece trocado | Fuso horário do usuário está errado |

## Exigir verificação em duas etapas (2FA)

Vem **desligada**. Você liga de dois jeitos:

- **Para toda a imobiliária:** Configurações → aba **Segurança** → marque
  *Exigir 2FA de todos os usuários*.
- **Para uma pessoa só:** abra o usuário → aba **Permissões** → marque
  *Exigir 2FA*.

Quem estiver marcado (pela empresa ou individualmente) é obrigado, no próximo
login, a registrar um app autenticador no celular antes de entrar. Avise antes,
com o celular em mãos.

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Configurações da imobiliária | Configurações → Configuração → Configurações |
| Provedor de cobrança Asaas | Configurações → Configuração → Provedor Asaas · `/odoo/provedores-pagamento` |

