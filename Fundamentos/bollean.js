let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //"!!" mostrar o valor real, true or false

console.log('os verdadeiros... ')
console.log(!!3)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log(`
os falsos....
`)
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(`
!!Bolleanos...
`)

let nome = '' 
console.log(nome || "desconhecido")

console.log('pra finalizaer..')

console.log(!!('' || null || 0 || 'epa' )) //retorna true 


console.log(!!nome)
