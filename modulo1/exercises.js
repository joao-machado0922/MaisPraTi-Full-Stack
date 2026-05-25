const prompt = require('prompt-sync')();

// Escreva um algorítmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondete em graus Fahrenheit

/* function celsiusParaFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

let celsius = Number(prompt("Digite uma temperatura em ºC: "));
if (!celsius.isNaN) console.log(`${celsius}ºC é ${celsiusParaFahrenheit(celsius)}ºF`); */

/*
    Escreva um algoritmo para ler o número de eleitores de um município, o número de
    votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
    em relação ao total de eleitores
 */

/* const totalEleitores = Number(prompt("Número total de eleitores: "));
const totalVotosBrancos = Number(prompt("Número de votos em branco: "));
const totalVotosNulos = Number(prompt("Número de votos nulos: "));
const totalVotosValidos = Number(prompt("Número de votos válidos: "));

const totalVotos = totalVotosBrancos + totalVotosNulos + totalVotosValidos;
const abstencoes = totalEleitores - totalVotos;

const percentualVotosBrancos = (totalVotosBrancos / totalEleitores) * 100;
const percentualVotosNulos = (totalVotosNulos / totalEleitores) * 100;
const percentualVotosValidos = (totalVotosValidos / totalEleitores) * 100;
const percentualAbstencoes = (abstencoes / totalEleitores) * 100;

console.log(` - Total de votos: ${totalEleitores}
 - Votos em Branco: ${totalVotosBrancos} -> ${percentualVotosBrancos.toFixed(2)}%
 - Votos nulos: ${totalVotosNulos} -> ${percentualVotosNulos.toFixed(2)}%
 - Votos válidos: ${totalVotosValidos} -> ${percentualVotosValidos.toFixed(2)}%
 - Abstenções: ${abstencoes} -> ${percentualAbstencoes.toFixed(2)}%`); */

/*
    Escreva um algorítmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.
 */

/* for (let i = 1000; i <= 1999; i++) {
    if (i % 11 == 5){
        console.log(i);
    }
} */

/*
    Escreva um programa para calcular a redução do tempo de vida de um fumante.
    Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
    Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
    vida um fumante perderá e exiba o total em dias.
 */

/* const qtdCigarros = Number(prompt("Quantos cigarros você fuma por dia? "));
const qtdAnosFumados = Number(prompt("Há quantos anos você fuma? "));

const diasFumados = qtdAnosFumados * 365;
const totalCigarros = qtdCigarros * diasFumados;
const minutosPerdidos = totalCigarros * 10;
const horasPerdidas = minutosPerdidos / 60;
const diasPerdidos = horasPerdidas / 24;
const anosPerdidos = diasPerdidos / 365;

console.log(`Você já fumou ${totalCigarros} cigarros`);
console.log(`Isso dá ${diasFumados.toFixed(2)} dias fumando`);
console.log(`Ou seja, você perdeu ${minutosPerdidos.toFixed(2)} minutos de expectativa de vida`);
console.log(`Isso dá ${horasPerdidas} horas, ${diasPerdidos.toFixed(2)}`);
console.log(`Isso quer dizer que você perdeu ${anosPerdidos.toFixed(2)} anos de sua vida`);
console.log("Pare de fumar imediatamente"); */

/*
    As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.
 */

/* const qtdMacas = Number(prompt("Quantas maçãs você comprou? "));
const precoTotal = qtdMacas >= 12 ? qtdMacas * 0.25 : qtdMacas * 0.30;
console.log(`O valor total das maçãs deu R$${precoTotal.toFixed(2)}`); */

/*
    Escreva um algorítmo para ler 2 valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
 */

/* let num1 = Number(prompt("Digite um número: "));
let num2
do {
    num2 = Number(prompt("Digite outro número diferente do primeiro: "));
} while (num2 === num1);

if (num1 > num2) {
    console.log(`${num2} -> ${num1}`);
} else {
    console.log(`${num1} -> ${num2}`);
} */

/*
    Escreva um algoritmo que percorra o array e calcule:

    A soma de todos os elementos
    A média dos elementos
    O maior valor encontrado
    O menor valor encontrado
*/

const arr = [10, 50, 17, 20, 90, 1, 40];

let menorNumero = arr[0];
let maiorNumero = arr[0];
let soma = 0;

for (let i = 0; i < arr.length; i++) {
    soma += arr[i];

    if (arr[i] < menorNumero) {
        menorNumero = arr[i];
    }

    if (arr[i] > maiorNumero) {
        maiorNumero = arr[i];
    }
}

console.log(`A média dos números é ${(soma / arr.length).toFixed(2)}`);
console.log(`O maior número é ${maiorNumero}`);
console.log(`O menor número é ${menorNumero}`);
