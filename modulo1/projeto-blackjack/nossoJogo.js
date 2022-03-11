/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log('Bem vindos ao jogo de BlackJack')

const começoJogo = confirm('Quer iniciar uma nova rodada?')
if(começoJogo) {
 const primeiraCartaDoJogador = comprarCarta()
 const segundaCartaDoJogador = comprarCarta()
 const primeiraCartaDaCpu = comprarCarta()
 const segundaCartaDaCpu = comprarCarta()
 
 const placarDoJogador = primeiraCartaDoJogador.valor + segundaCartaDoJogador.valor
 const placarDaCpu = primeiraCartaDaCpu.valor + segundaCartaDaCpu.valor
 
 console.log( 
    `Cartas do usuário:${primeiraCartaDoJogador.texto}, ${segundaCartaDoJogador.texto} = ${placarDoJogador} `)
 
 console.log( 
    `Cartas da CPU:${primeiraCartaDaCpu.texto}, ${segundaCartaDaCpu.texto} = ${placarDaCpu} `) 

   
if  (placarDoJogador > placarDaCpu) {
console.log("o jogador ganhou!!!")
} 
else if (placarDaCpu > placarDoJogador) {
console.log("A Cpu ganhou") }
 else if (placarDaCpu === placarDoJogador) {
console.log("empate!")}
 }
else{
   console.log("o jogo terminou!")
}




