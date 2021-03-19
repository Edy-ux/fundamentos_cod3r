

const printNota = nota => {

    if (nota >= 7) {
        console.log('Aprovado!!')
    } else {
        console.log('Reprovado')
    }


    // nota >= 7 ? console.log('Aprovado!'): console.log('Reprovado!')


}

printNota(8)
printNota("Opa") // cuidado!!