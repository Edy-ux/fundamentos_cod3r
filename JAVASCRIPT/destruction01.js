const Pessoa = {
    nome: 'Ana', 
    idade: 32,
    endereco: {
        logradouro:'Av Brasil',
        numero: 100
    }
}

const {nome, idade, endereco } = Pessoa
console.log(nome, idade, endereco) 

// Ana 32 { logradouro: 'Av Brasil', numero: 100 }

const {endereco : {logradouro, numero, cep}} = Pessoa
console.log(logradouro, numero, cep)
//ou =====----------------------------- 
const {nome: n, idade: i, } = Pessoa

console.log(n,i)
// Ana 32


const  str = '20211203'





