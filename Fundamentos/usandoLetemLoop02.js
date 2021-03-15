
   const funcs = []

for(let i = 0; i < 10; i ++) {

   console.log(funcs)
   funcs.push(function(){
      console.log(i)
      

   })

  
}


funcs[1]() //1
funcs[8]() //8



