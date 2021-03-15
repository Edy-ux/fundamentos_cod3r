// Anonymous function
// IIFE, Inmediately invoked function expression 

(function(a,b,c) {
   let x = 3
   console.log(`Result:${a + b + c}`)
   console.log(x)
})(1,2,3);  // deve-se usar ponto e virgula se for usar outra IIFE abaixo do codigo

(function(a,b,c) {
   let x = 300
   console.log(`Result:${a + b + c}`)
   console.log(x)
})(1,2,3);  // deve-se usar ponto e virgula se for usar outra IIFE abaixo do código


//Usando arrow em IIFE 
(() => {
    console.log('Arrow 01') 
})()



const array = [10, 30, 40, 200, 2 , 8, 89, 4]

function somar(arr) {

    let soma = 0

    array.reduce((p, c) => soma = p + c )

    return soma
}

console.log(somar(array)) 


const Soma = {
    array: [10,20,30],
    int: 0, 
    soma(arr){ 
        
        arr.reduce((p,c) => this.int = p + c)
        console.log(Soma.int)
        somar(Soma.array)
        return this.int
    }
    
}
Soma.soma(Soma.array)









