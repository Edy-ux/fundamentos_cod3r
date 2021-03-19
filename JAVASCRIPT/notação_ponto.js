 
 console.log(Math.pow(9,2))
  
 const obj =  {}
 obj.nome = 'Bola'


 function Objc(name) {
     this.name = name
     this.exec = function() {
          console.log('Exec...')
     }
 }
 
 const objc1 = new Objc('Ednei')
 const objc2 =  new Objc('Paulo')

 console.log(objc1.name)


 class Obj {
    constructor(name) {
        this.name = name
    }

    exec() {
      console.log('Exec.. ' + this.name)
    }
}


const obj1 = new Obj('Cadeira')
const obj2 = new Obj('Mesa')

console.log(obj1.name)
obj1.exec()



 