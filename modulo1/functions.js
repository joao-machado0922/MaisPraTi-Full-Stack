function somaDeTudo(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma;
}

function media(lista) {
    return (somaDeTudo(lista) / lista.length);
}

function maiorValor(lista) {
    let maior = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    return maior;
}

function menorValor(lista) {
    let menor = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    return menor;
}

let arrayTeste = [5, 40, 90, 4, 1];
let somaArray = somaDeTudo(arrayTeste);
let mediaArray = media(arrayTeste);
let maiorDoArray = maiorValor(arrayTeste);
let menorDoArray = menorValor(arrayTeste);

console.log(`A Soma dos elementos do array é: ${somaArray}`);
console.log(`A média dos valores do array é: ${mediaArray}`);
console.log(`O maior valor do array é: ${maiorDoArray}`);
console.log(`O menor valor do array é: ${menorDoArray}`);