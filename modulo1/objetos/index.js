/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //Virginia Cavendish
console.log(filme.transmissoesHoje[2]) //Object { canal: "Globo", horario: "14h" }
//canal: "Globo"
//horario: "14h"

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //{ nome: "Juca", idade: 3, raca: "SRD" }
console.log(gato) // { nome: "Juba", idade: 3, raca: "SRD" }
console.log(tartaruga) // { nome: "Jubo", idade: 3, raca: "SRD" }
//b // copia toda as células

3.

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

//const pessoa = 
{
  //nome: "Caio", 
  //idade: 23, 
  //backender: false
}

//console.log(minhaFuncao(pessoa, "backender")) //false
//console.log(minhaFuncao(pessoa, "altura")) // undefined
//b - o valor foi impresso como undefined porque não há compatibilidade nos dados demonstrados*/

//exercicio de escrita de codigo

/*const pessoa = {
  nome : "Jonatha",
  apelidos : ["Joninhas", "Jonas", "Galego"]
}  
const frase = `eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ou ${pessoa.apelidos[2]}`

console.log(frase)
const novaListaApelidos = {
...pessoa,
novosapelidos : ["não", "sei", "apelidar"]
}
console.log(novaListaApelidos)*/
/*const pessoa = {
	nome: "Jonatha", 
  idade: 22,
profissao: "MESTREDOTI"
}
const pessoa2 = {
	nome: "Pereira", 
  idade: 23,
profissao: "SENIORDOTI"
   
//letra b

}
const informacoes = ["Jonatha", "Jonatha".length, 22, "MESTREDOTI", "MESTREDOTI".length]
console.log(informacoes)*/
const carrinhoFinal = []
const extra = {
	nome: "uva", 
  disponibilidade : true

}
const hiper = {
nome: "manga",
disponibilidade: true

}
const gbarbosa = {
nome: "abacaxi",
disponibilidade: true

}
carrinhoFinal.push(extra)
carrinhoFinal.push(hiper)
carrinhoFinal.push(gbarbosa)
console.log(carrinhoFinal)