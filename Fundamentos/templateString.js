const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + "!"
const template = `
Ola ${nome}!` 
const teste = ''

console.log(concatenacao, template) 
console.log(`1+1=${1+1}`) 

const up = texto => texto.toUpperCase() 
console.log(`Eiiii ${up(nome)}!`)

console.log(Number(teste)) //  convençao de string vazia retorna zero