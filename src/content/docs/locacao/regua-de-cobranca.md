---
title: "Régua de cobrança: criar a padrão, acompanhar, reenviar"
description: "Como ligar a régua de cobrança, criar a régua padrão da imobiliária, acompanhar os disparos de cada fatura e reenviar um aviso."
secao: locacao
telas: [regua-cobranca, disparos-cobranca]
quem: [financeiro, gestor]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** Locação → Cadastros → **Réguas de Cobrança** · Locação →
Operação → **Cobranças**
**Atalho:** `/painel/regua-cobranca` · disparos em `/painel/disparos-cobranca`
**Quem faz:** gestor cria e edita a régua; financeiro acompanha e reenvia

> Hoje a régua dispara **por e-mail**. WhatsApp e SMS aparecem como canal, mas
> um passo nesses canais falha com *canal ainda não está implementado*.

---

## Parte 1 — Criar a régua padrão (gestor)

1. **Configurações → Configurações Gerais → aba Locação**
2. Em **Habilitação**, marque **Régua de cobrança**
3. Em **Cobrança**, botão **Criar régua padrão**
4. Ela nasce com cinco passos: **Lembrete preventivo** (3 dias antes do
   vencimento), **Aviso de vencimento** (no dia), **Aviso de atraso** (1 dia
   depois), **Cobrança formal** (7 dias) e **Notificação extrajudicial** (15
   dias)
5. Confira que **Régua de cobrança padrão** aponta para ela e salve

Para ajustar: **Locação → Cadastros → Réguas de Cobrança** → abra a régua.
Cada passo tem **Dias do vencimento** (negativo é antes, positivo é depois),
**Passo**, **Canal** e **Modelo de e-mail**. Sábado e domingo são pulados
sempre; **Calendário de dias úteis** acrescenta os feriados. **Pausar em
negociação** respeita o botão **Pausar cobrança** da fatura.

## Parte 2 — Acompanhar os disparos (financeiro)

1. **Locação → Operação → Cobranças**. A tela abre no filtro **Agendados**;
   tire-o para ver os demais
2. Filtro **Atrasados**: passos agendados para uma data que já passou. O robô
   roda uma vez por dia e envia tudo que estava previsto até hoje; um atrasado
   que continua **Agendado** depois da passada do dia é sinal de régua
   desligada ou robô parado
3. Filtro **Falharam** → abra o disparo → leia o quadro **Falha** → corrija a
   causa → botão **Reenviar**
4. Para adiantar um aviso, **Enviar agora** num disparo **Agendado** (na
   lista, o botão chama-se **Enviar**)
5. Para segurar um aviso, **Cancelar** (só em Agendado)
6. Agrupe por **Canal** ou **Disparo previsto** para ver a semana

Dentro da fatura, o cartão **Cobranças** mostra só os disparos dela.

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| A fatura é confirmada | Agenda todos os passos da régua do contrato, contados a partir do vencimento |
| Todo dia (robô *Locação: disparar régua de cobrança*) | Envia os passos previstos até hoje, inclusive os atrasados, para o e-mail do locatário |
| A fatura é paga ou cancelada | Os passos que faltavam **não** saem |
| A fatura está com **Pausar cobrança** e a régua tem **Pausar em negociação** | Os passos ficam parados até **Retomar cobrança** |
| Um envio falha | O disparo vira **Falhou**, com o motivo, e os outros seguem |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *'…' não tem e-mail cadastrado, então o passo '…' não pôde ser enviado* | Cadastre o e-mail do locatário e clique em **Reenviar** |
| *O passo '…' não tem modelo de e-mail, então não há o que enviar* | Abra a régua e escolha o **Modelo de e-mail** do passo |
| *O canal '…' ainda não está implementado, então o passo '…' da fatura '…' não foi enviado* | Troque o **Canal** do passo para E-mail |
| *Não há o que cobrar nestas faturas — quitadas, canceladas ou em negociação: …* | A fatura já foi paga, cancelada ou está pausada. Nada a fazer |
| Nenhum disparo foi agendado para a fatura | O contrato está sem **Régua de cobrança** na aba Faturamento, a régua não tem passos, ou a fatura está sem vencimento |
| Os disparos ficam **Agendados** e nunca saem | A régua está desligada em **Habilitação** nas Configurações. **Enviar agora** e **Reenviar** funcionam mesmo assim |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Pausar a cobrança de um locatário | [Faturas mensais](/locacao/faturas-mensais/) |
| Ver quem está em atraso | Locação → Relatórios → Inadimplência · `/painel/relatorio-inadimplencia` |
| Trocar a régua de um contrato | Abra o contrato → aba **Faturamento** → **Régua de cobrança** |
| Ligar e desligar a régua | [Configurações de Locação](/locacao/configuracoes-de-locacao/) |
