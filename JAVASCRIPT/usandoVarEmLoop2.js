


const funcs = []

for(var i = 0; i < 10; i ++) {

   funcs.push(function(){
      console.log(i)
      
  
   })

  
}


funcs[1]() //10 porque nesse caso i sairá do espoco de bloco , devido ao uso do var.
funcs[8]() //10 

