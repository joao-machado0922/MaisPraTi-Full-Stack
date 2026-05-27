const prompt = require('prompt-sync')()

/* 1. Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um
laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto
a resposta for "sim". */

let numeroTabuada;
let opcaoTabuada;

do {
    numeroTabuada = Number(prompt("Insira um número para gerar tabuada: "));
    for (let i = 1; i <= 10; i++) {
        console.log(`${numeroTabuada}x${i} = ${numeroTabuada * i}`);
    }
    opcaoTabuada = prompt("Deseja criar a tabuada de outro número? ");
} while (opcaoTabuada.toLowerCase() == 'sim' || opcaoTabuada.toLowerCase() == "s");

/* 2. Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos
dígitos ele possui. Trate o caso do número zero (que possui 1 dígito). */

let numeroInteiro = parseInt(prompt("Insira um número inteiro: "));
let caracteres = [];
let stringNumero;

if (!numeroInteiro.isNaN && numeroInteiro >= 0) {
    stringNumero = numeroInteiro.toString();
    if (numeroInteiro == 0) {
        caracteres.push("0");
    } else {
        for (let i = 0; i < stringNumero.length; i++) {
            caracteres.push(stringNumero[i]);
        }
    }
    console.log(`Esse número tem ${caracteres.length} caractere(s)`);
} else {
    console.log(`[ERRO] - INSIRA UM NÚMERO INTEIRO POSITIVO`);
}

/* 3. Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os
usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13... */

let fiboUnd = parseInt(prompt("Quantos números da sequência de Fibonacci deseja ver? "));
let fiboAtual = 1;
let fiboAnterior = 1;

for (let i = 0; i < fiboUnd; i++) {
    if (i >= 2) {
        fiboAtual = fiboAtual + fiboAnterior;
        fiboAnterior = fiboAtual - fiboAnterior;
        console.log(`${i + 1}º: ${fiboAtual}`);
    } else {
        console.log(`${i + 1}º: 1`);
    }
}

/* 4. Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço
do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as
tentativas. */

let senhaFixa = "***";
let tentativas = 0;
let tentativaSenha = prompt("Insira sua senha: ");

if (tentativaSenha === senhaFixa) {
    console.log("Senha correta! Bem-vindo(a)");
} else {
    do {
        tentativas++;
        console.log(`[SENHA INCORRETA] ${3 - tentativas} tentativas restantes!`);
        tentativaSenha = prompt("Tente novamente: ");
        if (tentativaSenha === senhaFixa) {
            console.log("Senha correta! Bem-vindo(a)");
        } else if (tentativas >= 2) {
            console.log("[TENTATIVAS ESGOTADAS]");
        }
    } while (tentativas < 2 && tentativaSenha != senhaFixa);
}

/* 5. Leia um número N e exiba todos os números primos entre 2 e N usando laços
aninhados (for dentro de for). Exiba também a quantidade total de primos
encontrados. */

let numeroPrimo = parseInt(prompt("Insira um número: "));
let numerosPrimos = [];
let countPrimos = 0;

for (let i = 2; i <= numeroPrimo; i++) {
    countPrimos = 0;
    for (let ii = 2; ii <= i; ii++) {
        if (i % ii === 0) {
            countPrimos++;
        }
    }
    if (countPrimos == 1) {
        numerosPrimos.push(i);
    }
}
console.log(`Foram encontrados ${numerosPrimos.length} números primos`);

/* 6. Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média
da turma, o nome do aluno com maior nota e o nome do aluno com menor nota.
Não use funções prontas como Math.max(). */

let arrayAlunos = [["Arlindo", 8], ["Bruno", 6], ["Carlos", 10], ["Daniel", 9], ["Elias", 8]];
let maiorNota = arrayAlunos[0];
let menorNota = arrayAlunos[0];
let mediaTurma = 0;

for (let i = 0; i < arrayAlunos.length; i++) {
    if (arrayAlunos[i][1] > maiorNota[1]) {
        maiorNota = arrayAlunos[i];
    }
    if (arrayAlunos[i][1] < menorNota[1]) {
        menorNota = arrayAlunos[i];
    }
    mediaTurma += arrayAlunos[i][1];
}

console.log(`Média da turma: ${(mediaTurma / arrayAlunos.length).toFixed(2)}`);
console.log(`O aluno com a maior nota é ${maiorNota[0]} com a nota ${maiorNota[1]}`);
console.log(`O aluno com a menor nota é ${menorNota[0]} com a nota ${menorNota[1]}`);


/* 7. Simule um carrinho de compras: leia nomes e preços de produtos em um laço até
o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o
subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a
pagar. */

let carrinhoCompras = [];
let novoProduto = "";
let novoPreco = 0;
let opcaoSaida = "";
let subTotal = 0;

do {
    novoProduto = prompt("Produto: ");
    novoPreco = Number(prompt("Valor do produto: "));
    carrinhoCompras.push([novoProduto, novoPreco]);
    subTotal += novoPreco;
    opcaoSaida = prompt("Digite 'sair' para parar: ");
} while (opcaoSaida.toLowerCase() !== 'sair');

for (let i = 0; i < carrinhoCompras.length; i++) {
    console.log(` - ${carrinhoCompras[i][0]} - R$${carrinhoCompras[i][1]}`);
}

console.log(`----------`);
console.log(`Subtotal: R$${subTotal}`);
console.log(`----------`);

if (carrinhoCompras.length > 3) {
    console.log(`Desconto de R$${(subTotal * 0.1).toFixed(2)} aplicado`);
    subTotal = subTotal - (subTotal * 0.1);
    console.log(`Valor Total - R$${subTotal}`);
} else {
    console.log("Nenhum desconto aplicado");
    console.log(`Valor Total - R$${subTotal}`);
}
console.log(`----------`);

/* 8. Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de
trás para frente com um laço for, monte a palavra invertida. Exiba a palavra
original, a invertida e informe se ela é um palíndromo. */

let palavra = prompt("Insira um palavra: ").toLowerCase();
let palavraInvertida = "";
for (let i = palavra.length; i > 0; i--) {
    palavraInvertida += palavra[i - 1];
}

console.log(`A palavra ${palavra} ao contrário é ${palavraInvertida}`);

if (palavraInvertida === palavra) {
    console.log("E é um palíndromo");
}

/* 9. Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do...while,
peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou
menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e
quantas tentativas foram necessárias. */

let randomNumber = parseInt(Math.random(1, 101) * 100);
let tentativaNumero;
let tentativasSenha = 0;
let chutes = [];

do {
    tentativaNumero = parseInt(prompt("Diga um número entre 1 e 100: "));
    tentativasSenha++;
    chutes.push(tentativaNumero);
    if (tentativaNumero < randomNumber) {
        console.log(`O número misterioso é maior que ${tentativaNumero}`);
    } else if (tentativaNumero > randomNumber) {
        console.log(`O número misterioso é menor que ${tentativaNumero}`);
    }
} while (tentativaNumero !== randomNumber);

console.log(`Acertou miseravi, você levou ${tentativasSenha} tentativas`);
console.log(`Essas foram suas tentantivas:`);
for (let i = 0; i < chutes.length; i++) {
    console.log(`${i + 1}ª tentativa: ${chutes[i]}`);
}

/* 10. Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados.
Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve
o melhor desempenho. */

let matrizAlunos = [
    [5, 5, 5, 5],
    [7, 6, 10, 8],
    [2, 7, 6, 9]
];

let mediaGeral = 0;

let mediaDoAluno = 0;

let mediasAlunos = [];

for (let i = 0; i < matrizAlunos.length; i++) {
    mediaDoAluno = 0;
    for (let ii = 0; ii < matrizAlunos[i].length; ii++) {
        mediaDoAluno += matrizAlunos[i][ii];
    }
    mediaDoAluno = mediaDoAluno / matrizAlunos[i].length;
    mediasAlunos.push(mediaDoAluno);
    mediaGeral += mediaDoAluno;
    console.log(`Media do aluno ${i + 1} - ${mediaDoAluno}`);
}

mediaGeral = mediaGeral / matrizAlunos.length;
console.log(`Média da turma - ${mediaGeral}`);