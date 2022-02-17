let array
console.log('a. ', array)
// undefined
array = null
//null
console.log('b. ', array)
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//11
console.log('c. ', array.length)
let i = 0
//3
console.log('d. ', array[i])

array[i+1] = 19

console.log('e. ', array)
//[ 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, … ]
const valor = array[i+6]

console.log('f. ', valor)
//9

//2 questao
//const frase = ("Subi num ônibus em Marrocos")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//SUBI NUM ÔNIBUS EM MIRROCOS

const nome =prompt ("qual seu nome?")
const email =prompt ("qual seu email?")
const frase = ` meu nome é ${nome} e meu email é ${email}`
const template = ` o email ${email} foi cadastrado com sucesso. Seja bem vindo(a) ${nome}! `
console.log(template)
console.log(nome)
console.log(email)

const comidas = ["arroz", "feijão", "carne", "pizza", "macarrão"]
console.log(comidas)

console.log(`essas são as minhas comidas preferidas:`)
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])

const listadetarefas = []
listadetarefas.push(prompt("qual sua primeira tarefa?"))
listadetarefas.push(prompt("qual sua segunda tarefa?"))
listadetarefas.push(prompt("qual sua terceira tarefa?"))
const tarefaexecutada = Number(prompt("digite a tarefa realizada, de 0 a 2")) 
listadetarefas.splice(tarefaexecutada, 1)

console.log(listadetarefas)









