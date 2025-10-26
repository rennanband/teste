function calcularIdadeParOuImpar(pessoas){
    const novasPessoas = pessoas.map((pessoa) => {
        const dataNascimento = new Date(pessoa.dataNascimento);
        const dataAgora = new Date();
        const idade = Math.floor(((dataAgora - dataNascimento)/(1000*60*60*24))/365);
        pessoa.idade = idade;
        return pessoa
    })
    return novasPessoas;
}

const pessoas = [
    {
        nome: "Joao",
        dataNascimento: "1955-05-10"
    },
    {
        nome: "Maria",
        dataNascimento: "1955-05-10"
    },
    {
        nome: "Ze",
        dataNascimento: "1955-05-10"
    }
];

const resultado = calcularIdadeParOuImpar(pessoas);
console.log(resultado);