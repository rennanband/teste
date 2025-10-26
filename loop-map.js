function calcularIdadeParOuImpar(pessoas){
    const novasPessoas = pessoas.map((pessoa) => {
        if(pessoa.idade % 2 == 0){
            pessoa.ePar = true;
        }
        else{
            pessoa.ePar = false;
        }
        return pessoa
    })
    return novasPessoas;
}

const pessoas = [
    {
        nome: "Joao",
        idade: 20,
    },
    {
        nome: "Maria",
        idade: 21,
    },
    {
        nome: "Ze",
        idade: 102,
    }
];

const resultado = calcularIdadeParOuImpar(pessoas);
console.log(resultado);