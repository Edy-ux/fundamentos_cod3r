/* Array são vetores. Consegue agrupar multiplos valores é um tipo de dado (object) heterogeo, ou seja 
ou seja suporta vários tipos de dados */ 

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores.push({id: 3} , false, null, 'teste') // cria um novo array e add outros elementos no final
console.log(valores)

console.log(valores.pop()) // retira a último index do array

delete valores[0]
console.log(valores)

console.log(typeof valores)







