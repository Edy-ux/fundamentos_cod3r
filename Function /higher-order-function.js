/* Functions that operate on other functions, 
either by taking them as arguments or by 
returing them, are called higher-order-functions 
*/

function run(fn) { 
return ` Result: ${fn()}`  // quando se chamar atribundo a funcçao a uma variavél usa-se o return
}

function sayHello() {
    console.log('Hello')
}

run(sayHello)

run(function() {
    console.log('Run!!');
})

console.log(run(Math.random))



