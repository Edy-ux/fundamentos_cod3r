/* Hosting significa içar (jogar pra cima) moving to the top */
console.log('a=', a )

var a = 2

console.log('a=', a)
// dentra da função tbm sofre o hosting
function teste() {

console.log("a =", a)
var a = 2
console.log("a =", a)
    
}

teste()
