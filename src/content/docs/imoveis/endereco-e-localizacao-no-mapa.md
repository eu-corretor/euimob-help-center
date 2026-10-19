---
title: "Endereço, localização no mapa e imóveis próximos"
description: "Preencher o endereço pelo CEP, marcar o ponto exato do imóvel com o Plus Code e entender as sugestões de imóveis próximos."
secao: imoveis
telas: [imoveis, pipeline]
quem: [corretor]
funcionalidade: imoveis
versao_sistema: "19.0-2026.10"
sidebar:
  order: 3
---

**Caminho:** Imóveis → Imóveis → Todos os Imóveis → abra o imóvel → aba **Endereço**
**Atalho:** `/painel/imoveis`
**Quem faz:** captador, vendedor ou assistente

---

O endereço diz ao cliente onde fica o imóvel. A localização exata no mapa
ajuda você a oferecer outros imóveis da mesma região. Os dois levam poucos
minutos.

## Preencher o endereço

1. Digite o **CEP**. Rua, bairro, cidade e estado se preenchem sozinhos.
   Confira se vieram certos
2. Complete o número e o complemento
3. **Mostrar Endereço Completo**: deixe desmarcado se o proprietário não quer
   a rua e o número no anúncio
4. Imóvel na praia? Marque **Litoral** e informe a **Distância do Mar (m)**
5. Salve

<!-- PRINT: aba Endereço com o CEP preenchido -->

O mapa do anúncio no site usa esse endereço. Com Mostrar Endereço Completo
desmarcado, ele mostra só o bairro e a cidade.

## Marcar o ponto exato com o Plus Code

O ponto exato é o que permite à plataforma achar os imóveis próximos (veja
abaixo). O jeito mais certeiro de marcar é o Plus Code: um código curto, como
`8JQ7+5V`, que o Google Maps dá para qualquer lugar, até para um lote sem
número.

1. No Google Maps, marque o ponto do imóvel e copie o Plus Code
2. Cole no campo **Plus Code**. Pode colar com a cidade junto
   (`8JQ7+5V Florianópolis, SC`): só o código é usado
3. Confira se a cidade e o estado estão preenchidos
4. Clique em **Buscar pelo Plus Code**
5. Salve

<!-- PRINT: Google Maps com o Plus Code destacado -->

> Sem o Plus Code? Clique em **Buscar pelo Endereço**. A busca usa o CEP ou a
> rua e a cidade. Fica menos preciso: em loteamento ou rua sem número, prefira
> o Plus Code.

<!-- PRINT: bloco Localização com os dois botões e as coordenadas preenchidas -->

## Imóveis próximos

O cliente gostou do apartamento, mas achou pequeno? Com o ponto exato
marcado, você já tem na tela outras opções na mesma vizinhança para oferecer.

As sugestões aparecem na oportunidade do cliente, na aba
**Imóveis Sugeridos**, a partir do **Imóvel Principal** dela. Entram os
imóveis que:

- estão publicados
- têm a mesma finalidade (venda, aluguel ou temporada)
- têm o ponto exato marcado
- ficam dentro do raio escolhido pela imobiliária (3 km, se o gestor não
  mudou)

A lista vem do mais perto para o mais longe, com a distância em linha reta, e
mostra até 20 imóveis.

> Imóvel sem ponto exato não aparece como sugestão. E, quando é ele o Imóvel
> Principal, a aba busca só pelo estado, pela cidade e pelo bairro, sem
> distância.

Na própria aba Imóveis Sugeridos dá para aumentar ou diminuir o
**Raio de Busca (km)** daquela oportunidade e filtrar por preço, quartos,
vagas, comodidades e o que mais o cliente pediu.

## Caminhos relacionados

| Para quê | Caminho |
| --- | --- |
| Voltar ao cadastro completo | [Cadastrar um imóvel](/imoveis/cadastrar-um-imovel/) |
| Aba anterior | [Preencher os detalhes do imóvel](/imoveis/preencher-os-detalhes-do-imovel/) |
| Próxima etapa | [Responsáveis, proprietários e dados internos](/imoveis/responsaveis-proprietarios-e-dados-internos/) |
| Mudar o raio dos imóveis próximos (gestor) | [Configurações de Imóveis](/imoveis/configuracoes-de-imoveis/) |
