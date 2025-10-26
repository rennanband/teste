//Retorna nums pares e add em lista
function pares(x){
    let num = [];
    for (let i = 0; i<x; i++){
        if(i%2 === 0){
            num.push(i);
        }
    }
    console.log(num);
}

//Retorna nums divisiveis por 5
function div5(x){
    for(let i = 0; i<x; i++){
        if(i%5 === 0){
            console.log(i);
        }
    }
}

//funcao de media simples
function media(list){
    let soma = 0;
    for(let i = 0; i<list.length; i++){
        soma += list[i];
    }
    console.log(soma/list.length);
}


function count(n) {
    if (n<0) return;
    console.log(n);
    count(n-1);
}

function objeto(){
    const pessoa = {
        nome: "Renan",
        idade: 20,
    };
    pessoa.cpf = "200";
    console.log (pessoa);
}

function arrayfrutas(){
    const frutas = ["banana", "maca", "pera"];
    frutas.forEach(imprimefruta);
}
arrayfrutas();

function imprimefruta(fruta, indice){
        console.log(`indice ${indice}: comer mais ${fruta}`)

}