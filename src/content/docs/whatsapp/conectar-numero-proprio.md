---
title: "Conectar o WhatsApp do corretor"
description: "Como ligar o número de WhatsApp do próprio corretor ao Eu Imob lendo o QR Code, acompanhar a situação da conexão e reconectar quando ele cair."
secao: whatsapp
telas: [contas-whatsapp]
quem: [corretor, gestor]
funcionalidade: whatsapp_waha
verificado_em: 2026-11-09
versao_sistema: "19.0-2026.11"
---

**Caminho:** WhatsApp → Configuração → **Contas**
**Atalho:** `/painel/contas-whatsapp`
**Quem faz:** o corretor dono do número, com o celular na mão

> Depois de conectado, as conversas do WhatsApp do corretor chegam ao Eu Imob
> e as respostas saem do próprio número dele. O celular continua funcionando
> normalmente.

---

## Antes de começar

- A imobiliária precisa ter o **WhatsApp do corretor** contratado.
- Tenha o celular com o WhatsApp do número que vai ser conectado. A leitura do
  QR Code é feita por ele.
- Cada número pessoal pertence a um corretor só. Para outro corretor, crie
  outra conta.

## Passo a passo

1. **WhatsApp → Configuração → Contas** → botão **Novo** (se a conta ainda não
   existir)
2. Preencha **Nome** (por exemplo, *WhatsApp da Ana*), **Escopo** = **Pessoal**,
   **Número** e **Corretor**. Salve
3. Clique em **Conectar**. A janela **Conectar WhatsApp** se abre com
   *Preparando a conexão* e, em poucos segundos, mostra o QR Code
4. No celular, abra o WhatsApp → **Aparelhos conectados** → **Conectar um
   aparelho**
5. Aponte a câmera para o QR Code da janela
6. A janela mostra **WhatsApp conectado!** e fecha sozinha. A conta passa para
   **Conectada**

O QR Code muda sozinho a cada 20 segundos. Se a câmera não ler, clique em
**Atualizar QR** na janela.

<!-- PRINT: janela Conectar WhatsApp com o QR Code -->

## A situação da conexão

A barra no topo da conta mostra a situação do número agora:

| Situação | O que quer dizer |
| --- | --- |
| **Desconectada** | O número não está ligado ao sistema. Clique em **Conectar** |
| **Conectando** | O sistema está preparando a conexão. Espere alguns segundos |
| **Aguardando leitura do QR** | Falta ler o QR Code no celular. Clique em **Conectar** para ver o código |
| **Conectada** | As conversas chegam e as respostas saem pelo número |
| **Falha** | A conexão não subiu. Clique em **Conectar** para tentar de novo |

## Conferir se o número continua conectado

Se o número foi desconectado pelo celular (em **Aparelhos conectados** →
**Desconectar**), o sistema percebe em alguns minutos. Para conferir na hora:

1. Abra a conta
2. Clique em **Verificar status**
3. O aviso *Conexão verificada* diz a situação, e a barra no topo é atualizada

## Desconectar o número

1. Abra a conta → botão **Desconectar**
2. A conta passa para **Desconectada** e o número sai de **Aparelhos
   conectados** no celular

Para voltar, clique em **Conectar** e leia um QR Code novo.

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| O número sai do ar | O corretor recebe o aviso *A sessão de WhatsApp saiu do ar*, e as mensagens que ele enviar pelo sistema ficam **retidas** |
| O número volta | As mensagens retidas saem na ordem, e cada conversa recebe a nota *Sem captura de mensagens entre ... e ...*: o que o cliente escreveu nesse intervalo pode não ter chegado ao sistema |
| O número fica fora do ar por mais de 2 horas | O gestor da imobiliária também é avisado |
| Você clica em **Enviar teste** | O sistema manda *Conexão com o sistema confirmada.* para o próprio número, para você ver chegar no celular |

## Se der errado

| Mensagem | O que fazer |
| --- | --- |
| A janela fica em *Preparando a conexão* por mais de um minuto | Feche a janela e clique em **Conectar** de novo |
| *Não foi possível preparar a conexão. Tente de novo em instantes.* | Clique em **Tentar de novo** na janela. Se repetir, fale com o suporte |
| *Não foi possível falar com o servidor do WhatsApp* | O servidor de conexão está fora do ar. Tente em alguns minutos; a situação da conta não muda enquanto isso |
| *O servidor do WhatsApp não respondeu. Tente de novo* | Clique em **Atualizar QR** ou **Conectar** de novo em alguns segundos |
| *Conecte o WhatsApp antes do envio de teste.* | Conecte o número (passo a passo acima) e só depois clique em **Enviar teste** |
| *A imobiliária ... não contratou este canal de WhatsApp* | Fale com o suporte para incluir o WhatsApp do corretor no plano |

## Caminhos relacionados

- **WhatsApp → Conversas**: as conversas do número conectado
- **WhatsApp → Triagem**: números desconhecidos que escreveram e esperam
  alguém decidir o que fazer
- **Permitir campanhas por este número**, na própria conta: só o corretor dono
  do número liga. Envio em massa aumenta o risco de o WhatsApp bloquear o
  número
