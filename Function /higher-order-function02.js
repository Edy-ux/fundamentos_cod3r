
/* Uma função retornando outra função 
tecninca chamada de curring, tendo um maior reuso da função
*/


function finalPrice(tax){

    return function(price) {
      return price * (1 + tax)
    }
}


const nycFinalPrice = finalPrice(0.0875)

console.log(Math.round(nycFinalPrice(25.1)))



