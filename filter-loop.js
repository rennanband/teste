function testeFilter(){
    const num2 = [2, 5, 15, 22, 31, 440, 5045];
    const div5 = num2.filter((n, i) => ((n) % 5 === 0));
    console.log(div5);
}

function filtrarPessoasMenores18(pessoas){
    return pessoas.filter((pessoa) => pessoa.idade < 18);
}

function filtrarPessoasMenores18V2(pessoas){
    const pessoasMenores18 = [];
    for (let i = 0; i < pessoas.length; i++){
        if (pessoas[i].idade < 18){
            pessoasMenores18.push(pessoas[i]);
        }
    }
    return pessoasMenores18;
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
        idade: 17,
    }
];

console.log(filtrarPessoasMenores18(pessoas));
console.log(filtrarPessoasMenores18V2(pessoas));