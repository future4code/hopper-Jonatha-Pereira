// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
  
//   Object { nome: "Amanda Rangel", apelido: "Mandi" }
// ​
// apelido: "Mandi"
// ​
// nome: "Amanda Rangel"

// Object { nome: "Laís Petra", apelido: "Laura" }
// ​
// apelido: "Laura"
// ​
// nome: "Laís Petra"

// Object { nome: "Letícia Chijo", apelido: "Chijo" }
// ​
// apelido: "Chijo"
// ​
// nome: "Letícia Chijo"

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
  
//   0: "Amanda Rangel"
// ​
// 1: "Laís Petra"
// ​
// 2: "Letícia Chijo"

// exercicios de escrita de codigo

const cachorrinhosDosClientes = [
    { nome: 'Lilica', raca: 'Pinscher' },
    { nome: 'Gustavinho', raca: 'Salsicha' },
    { nome: 'Spike', raca: 'Vira-Lata' },
    { nome: 'Mike', raca: 'Poodle' },
    { nome: 'Caramelo', raca: 'Pitbull' },
    { nome: 'labrador', raca: 'Salsicha' },
    { nome: 'Max', raca: 'Poodle' },
]
const apenasNomes = cachorrinhosDosClientes.map((cachorro) => {
    return cachorro.nome
})
console.log(apenasNomes)
const apenasSalsicha = cachorrinhosDosClientes.filter((cachorro) => {
    return cachorro.raca === 'Salsicha'
})
console.log(apenasSalsicha)
const descontoParaClientes = cachorrinhosDosClientes.filter((desconto) => {
    return desconto.raca === 'Poodle'
})