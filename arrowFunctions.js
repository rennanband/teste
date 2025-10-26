//Arrow functions normalmente são atribuídas a uma variavel, classe ou utilizadas como callback

//Atribuicao a variavel
const dobro = x => x * 2;

//Nas Arrow functions com mais de uma linha de codigo é utilizado {}
//Também necessario return como ultima linha

const media = (lista) => {
    let soma = 0;
    for (let i = 0; i<lista.length; i++){
        soma += lista[i];
    }
    return soma / lista.length;
}

const triplo = x => x * 3;

const  media3 = (a, b, c) => ((a + b + c)/3);

function testesFuncaoInclude(){
    console.log("Renan".includes("Re"));
    console.log("Renan".toLowerCase().includes("ren"));
    console.log("Renan".includes("Nan"));

    console.log("Abacaxi".includes("a"));
    console.log("Manga".includes("C"));
    console.log("Deu merda".includes("m"));

    const vogais = ["a", "e", "i", "o", "u"];
    console.log("Contem a letra i: " + vogais.includes("i"));
    console.log(vogais.includes("b"));
    console.log(vogais.includes("u"));

    const fruta = "Melancia";
    console.log(fruta.includes("Me", 0));
    console.log(fruta.includes("Mel", 1));
    console.log("DEMARCACAO " + fruta.includes("cia", 4));

    console.log("computador".includes("put")); // true
    console.log("teclado".includes("do", 5)); // true
    console.log(["js", "python", "c"].includes("JS")); // false
    console.log(["a", "e", "i", "o", "u"].includes("i")); // true
    }

const contarVogais = (palavra) => {
    let cont = 0;
    for (let i = 0; i < palavra.length; i++){
        if("aeiou".includes(palavra[i].toLowerCase())){
            cont += 1;
        }
    }
    return cont;
}
//console.log(contarVogais("Abacaxi"));

//Os metodos map, filter e reduce são utilizados para substituir
// a funcao dos laços "for" e "while"
// ***em caso de multiplas linhas nao esquecer o return, se n a array resultante
//recebe valores "undefined"

//teste map
const num = [1,2,3,4,5,6,7,8,9,10];
const pot2 = num.map((n, i) => {
    console.log("Indice " + i + ": " + (n*n));
    return n * n;
});