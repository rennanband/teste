const numeros = [1, 7, 20, 55, 126, 4001];
const num = numeros.reduce((acum, n, i) => {
    console.log(`Posição: ${i} - Número: ${n}`), acum + n
    })
console.log(num);