---
title: "Conectar o Eu Imob ao seu assistente de IA"
description: "Como ligar o Eu Imob ao Claude ou ao ChatGPT para consultar e registrar leads, contatos, imóveis e visitas pela conversa."
secao: ia
telas: [conexoes-de-ia]
quem: [corretor, gestor]
funcionalidade: mcp
verificado_em: 2026-11-08
versao_sistema: "19.0-2026.11"
---

**Caminho:** no seu assistente de IA → Configurações → Conectores → **Adicionar conector personalizado**
**Endereço do conector:** `https://euimob.com.br/mcp`
**Quem faz:** cada corretor ou gestor, na própria conta do assistente

> Depois de conectado, você pergunta ao seu assistente "quais leads entraram
> essa semana?" ou pede "agende uma visita para amanhã às 10h" e ele responde
> com os dados do Eu Imob, sem você abrir o sistema.

---

## Antes de começar

- Você precisa de uma conta no **Claude** (claude.ai) ou no **ChatGPT**
  (chatgpt.com) que aceite conectores personalizados. No Claude, o plano
  gratuito aceita um conector. No ChatGPT, a opção depende do plano.
- Faça a conexão no computador, pelo navegador. Depois de conectado, o
  assistente também usa o Eu Imob no aplicativo do celular.

## Passo a passo

1. No seu assistente, abra **Configurações** e procure a área de
   **Conectores** (no ChatGPT ela pode aparecer como **Aplicativos** ou
   **Plugins**)
2. Clique em **Adicionar conector personalizado** (ou **Adicionar servidor
   MCP**)
3. Dê um nome, por exemplo **Eu Imob**, e cole o endereço
   `https://euimob.com.br/mcp`
4. Salve e clique em **Conectar**. Uma janela do Eu Imob se abre
5. Entre com o mesmo e-mail e senha que você usa no sistema
6. Na tela **Autorizar acesso**, confira a **Conta** e a **Imobiliária**
7. Escolha o que o assistente vai poder fazer:
   - **Somente consultar**: ele lê os seus registros e não altera nada
   - **Consultar, criar e editar**: além de ler, cria e atualiza registros em
     seu nome
8. Confira a lista **Seus registros ao alcance do assistente** e clique em
   **Autorizar**
9. A janela fecha e você volta ao assistente. Numa conversa nova, ative o
   conector **Eu Imob** e faça a primeira pergunta

<!-- PRINT: tela Autorizar acesso com as duas opções -->

## O que você pode pedir

| Pedido | Precisa de |
|---|---|
| "Quais leads novos entraram essa semana?", "quais visitas tenho amanhã?" | Somente consultar |
| "Me mostre os apartamentos de 2 quartos publicados no Centro" | Somente consultar |
| "Cadastre o contato Maria Souza, telefone 11 99999-0000" | Consultar, criar e editar |
| "Mova a oportunidade do João para a etapa Proposta" | Consultar, criar e editar |
| "Agende uma visita ao imóvel 1234 para sexta às 10h" | Consultar, criar e editar |

## O que a plataforma faz sozinha

- **Respeita as suas permissões**: o assistente vê e altera só o que você vê e
  altera na tela. O que é de outra imobiliária nunca aparece.
- **Registra tudo em seu nome**: o que o assistente cria ou altera fica no
  histórico do registro como feito por você.
- **Vence em 90 dias**: depois disso, o assistente pede para conectar de novo.
  Repita o passo a passo.
- **Não usa os créditos de IA da imobiliária**: a conversa roda na sua conta do
  assistente.
- **Mostra ao gestor** cada conexão da equipe, em **Configurações → Conexões
  de IA**.

## Encerrar uma conexão

- **O próprio corretor**: **Minha conta** → aba **Segurança da conta** →
  **Chaves de API**, e apague a chave com o nome do assistente.
- **O gestor**, para qualquer pessoa da equipe: **Configurações** →
  **Conexões de IA** → **Encerrar** na linha da conexão.

O acesso é cortado na hora. Remover o conector só dentro do assistente não
basta: encerre também aqui.

## Se der errado

| Mensagem | O que fazer |
|---|---|
| *O assistente de IA não está habilitado para esta imobiliária* | O gestor ou o suporte desligou a função. Fale com o gestor |
| *Endereço de retorno não confere com o registrado* | Remova o conector no assistente e adicione de novo |
| O assistente diz que a autorização *é somente de leitura* | Você escolheu **Somente consultar**. Encerre a conexão e conecte de novo escolhendo **Consultar, criar e editar** |
| O assistente pede para autorizar de novo | A conexão venceu (90 dias) ou foi encerrada. Repita o passo a passo |
| O conector aparece sem nenhuma ferramenta | A autorização não terminou. Clique em **Desconectar** e depois em **Conectar** de novo, e libere as janelas pop-up do navegador |

## Caminhos relacionados

- **Conexões de IA** → `/painel/conexoes-de-ia` — as conexões da equipe (só o gestor)
- [Tirar dúvidas com a Clara](/ia/tirar-duvidas-com-a-clara/) — a assistente que já vem dentro do sistema
