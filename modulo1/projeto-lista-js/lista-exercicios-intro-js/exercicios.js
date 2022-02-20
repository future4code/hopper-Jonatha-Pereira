// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number  ( prompt( ' Qual a altura do terreno ?' ) )
  const largura = Number (prompt( ' Qual a largura do terreno ? '))
  const arearetangulo = altura * largura
  console.log(arearetangulo)
 }

// EXERCÍCIO 02
function imprimeIdade() {
  const nascimento = Number ( prompt( 'quando você nasceu?'))
  const anoatual = Number ( prompt ('qual é o ano atual?'))
  const idadeatual = nascimento - anoatual
  console.log(idadeatual)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
   const nome = prompt("qual seu nome?")
   const idade = Number( prompt( "qual sua idade?"))
   const email = prompt("qual seu email?")
   const informacao = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
   console.log(informacao)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const batata = alert ("escolha 3 cores favoritas, ok?")
const cor = []
cor.push(prompt ("qual sua primeira cor favorita?"))
cor.push(prompt ("qual sua segunda cor favorita"))
cor.push(prompt ("qual sua terceira cor favorita"))
console.log(cor)

}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array [array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

const primeira = array[0]
const ultima = array[array.length - 1]
array[0] = array[array.length - 1]
array[array.length - 1] = primeira

return array
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}