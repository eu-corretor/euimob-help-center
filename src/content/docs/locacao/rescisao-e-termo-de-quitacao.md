---
title: "Rescisão e termo de quitação"
description: "Como rescindir um contrato: motivo, data da saída, acerto de contas com multa e caução, fatura do acerto e o termo de quitação."
secao: locacao
telas: [rescisoes]
quem: [gestor]
funcionalidade: locacao
verificado_em: 2026-10-19
versao_sistema: "19.0-2026.10"
---

**Caminho:** Locação → Operação → **Contratos** → contrato → botão
**Rescindir** · Locação → Operação → **Rescisões**
**Atalho:** `/painel/rescisoes`
**Quem faz:** quem tem acesso à Locação; em geral o gestor

> Clicar em **Rescindir** já tira o contrato da emissão: ele vai para **Em
> rescisão** na hora. Se desistir, **Cancelar** a rescisão devolve o contrato a
> Ativo (mesmo que estivesse Em renovação).

---

## Passo a passo

1. Abra o contrato (Ativo ou Em renovação) → botão **Rescindir** → a rescisão
   abre, numerada (*RES-2026/0001*)
2. Grupo **Saída**: **Motivo** (Pedido do locatário, Pedido do locador, Acordo
   entre as partes, Fim do prazo, Inadimplência, Falecimento do locatário ou
   Outro), **Entrega das chaves** (a data da saída) e **Aviso prévio em**
3. Leia **Meses cumpridos** e **Meses restantes**
4. Grupo **Acerto de contas**: confira o **Acerto proporcional** (dias
   ocupados na última competência, descontado o que já foi faturado), a
   **Multa de rescisão** (ou a faixa **Multa dispensada**), a **Caução a
   devolver** e o **Total do acerto**
5. Negociou? Altere a **Multa de rescisão** (zere para dispensar) ou os outros
   valores à mão. A faixa **Multa dispensada** é calculada pelo motivo e pela
   carência; não se marca à mão
6. Grupo **Situação financeira**: **Débitos em aberto** mostra o que o
   locatário ainda deve em faturas. Cobre antes ou junto
7. **Observações**: estado do imóvel, vistoria, acordos
8. Botão **Efetivar rescisão** → a situação vira **Rescindido**, o contrato
   vai para **Encerrado** e o imóvel volta a ficar disponível
9. Cartão **Acerto** → a **Fatura do acerto** já sai confirmada (cobrança ao
   locatário se o total é positivo; nota de crédito se o total fica a favor
   dele, por caução ou aluguel pré-pago). Cobre, ou devolva. Com total zero
   não há fatura e o cartão não aparece
10. Com todas as faturas quitadas, botão **Termo de quitação** → PDF *Termo de
    Quitação*

## O que a plataforma faz sozinha

| Quando | O que acontece |
| --- | --- |
| Você clica em **Rescindir** | Cria a rescisão com a data de hoje e põe o contrato em **Em rescisão**: nenhuma fatura nova sai |
| Você escolhe o **Motivo** | **Fim do prazo** e **Pedido do locador** dispensam a multa sozinhos. Multa também cai quando não restam meses ou a **Carência da multa** do contrato já foi cumprida |
| Você informa **Entrega das chaves** | Calcula meses cumpridos e restantes, o proporcional dos dias e a multa: aluguel × **Multa de rescisão (aluguéis)** × meses restantes ÷ prazo |
| Há **Caução** na aba Garantias | Entra em **Caução a devolver** e, ao efetivar, a garantia fica marcada como devolvida |
| Você efetiva | Gera e confirma a fatura do acerto, encerra o contrato, libera o imóvel e zera as próximas datas |

## Se der errado

| O que aparece | O que fazer |
| --- | --- |
| *O contrato … não está vigente e por isso não pode ser rescindido* (ao efetivar) | Só contrato Ativo, Em renovação ou Em rescisão rescinde |
| *O contrato … já tem uma rescisão em andamento* (ao criar uma rescisão à mão) | Abra a existente em Locação → Operação → Rescisões → filtro **Em andamento** ou **Efetivadas**. Pelo botão **Rescindir** do contrato, a rescisão existente reabre sozinha |
| *A rescisão de … não pode ser anterior ao início do contrato* | Corrija **Entrega das chaves** |
| *O termo de quitação só sai depois da rescisão efetivada* | Clique em **Efetivar rescisão** primeiro |
| *O contrato … ainda tem R$ … em aberto. Quite as faturas antes de emitir o termo de quitação* | Registre os pagamentos das faturas abertas (inclusive a do acerto) |
| *A rescisão … já foi efetivada e não pode ser excluída* | Rescisão efetivada não se apaga nem se cancela. Se foi engano, trate o estorno da fatura do acerto com o financeiro |
| *Só uma rescisão em rascunho pode ser cancelada* | Idem: depois de efetivar não há volta |

## Filtros que valem usar

| Filtro | Para quê |
| --- | --- |
| **Em andamento** | Saídas combinadas e ainda não efetivadas |
| **Com débito em aberto** | Quem saiu devendo: o termo de quitação não sai |
| **Com multa** | Conferir multas cobradas no período |

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Cobrar a fatura do acerto | [Faturas mensais](/locacao/faturas-mensais/) |
| Devolver o último repasse ou reter por reparo | [Repasses ao proprietário](/locacao/repasses-ao-proprietario/) |
| Ver o imóvel liberado | Locação → Relatórios → Imóveis e Vacância · `/painel/relatorio-imoveis-locacao` |
| Multa, carência e prazo do contrato | Abra o contrato → aba **Faturamento** → grupo **Encargos** |
