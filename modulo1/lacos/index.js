//interpretação de codigo//

/*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

resposta = 10
*/

/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
resposta a)
19
21
23
25
27
30*/

/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*
**
***
**** */

//**************escritas de codigo *************//


//1//



/*let contagemDosBichos = Number(
    prompt('Quantos bichinhos de estimação você tem ?')
)
let quantidadeDosBichos = 0
let nomeDosPets = []
while (quantidadeDosBichos < contagemDosBichos) {
    nomeDosPets.push(prompt('Qual o nome do seu pet ?'))
    quantidadeDosBichos++
}
if (contagemDosBichos === 0) {
    console.log('Que pena! Você pode adotar um pet!')
} else {
    console.log('Nomes dos bichos:', nomeDosPets)
}*/

//2//

//A

//const array = [10, 15, 20 , 25]
//console.log(array)//

/*function divisão(array) {
const novadivisao = []
for (const numero of array){
novadivisao.push(numero / 10)
}
return novadivisao
}
const novadivisao = [10, 15, 20 , 25]
divisão(novadivisao);
console.log(divisão)*/

/*const arrayoriginal = [10, 20, 30, 40];
 const array1 = [10/10]
 const array2 = [20/10]
 const array3 = [30/10]
 const array4 = [40/10]
 console.log(array1, array2, array3, array4)*/

 [10, 20, 30]
 function arraypar(array, array2) {
   for(let pares of array){
   if(pares % 2 === 0){
   array2.push(pares)  

  }}}
console.log(arraypar)