// Null faz referencia na memoria por valor mas null ex: valor = nul
/* underfined quando n foi inicializado 
é quando vc nao atribui  valor a variavel ex: let valor
 */

//Quando se trabalha com tipos primitivo a atribuição por valor e nao por referencia 

let valor //não inicializada
console.log(valor)

valor = null // Ausencia de valor, não aponta pra endereço de memoria
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}
  console.log(produto.preco)
  console.log(produto)

  produto.preco = 3.50 
  console.log(produto)

  produto.preco = undefined //evite atribuir underfined 
  console.log(!!produto.preco)
  console.log(produto)
 // delete produto.preco 

 produto.preco = null // sem preço
 console.log(!!produto.preco)

  








