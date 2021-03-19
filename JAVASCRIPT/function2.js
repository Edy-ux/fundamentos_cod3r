
//armazenando uma funcao em uma variavél

const imprimirSoma = function(a,b) {
   console.log( a + b )
}

imprimirSoma(2,3)

//armazenando uma funcao arrow em uma variavél
const soma = function(a,b) {
    return  a + b 
 }

console.log(soma(2,3))

// retorno implicito arrow

const subtracao = (a,b) => a - b
console.log(subtracao(3,2))


const impirimir2 = a => console.log(a)
impirimir2('Da hora!!')




