const prompt = require('prompt-sync')();

/* 1. Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o
aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9)
ou Reprovado (nota menor que 5). */

let notaAluno = Number(prompt("Nota do aluno: "));

if (notaAluno >= 7) {
    console.log("APROVADO");
} else if (notaAluno >= 5){
    console.log("EM RECUPERAÇÃO!");
} else {
    console.log("REPROVADO!");
}

/* 2. Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule
sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente
(de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais). */

let anoNascimento = Number(prompt("Insira seu ano de nascimento: "));
let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;

if (anoNascimento > anoAtual) {
    console.log("Insira um ano válido!");
} else {
    if (idade >= 60) {
        console.log(`Você tem ${idade} anos de idade, logo você é idoso`);
    } else if (idade >= 18) {
        console.log(`Você tem ${idade} anos de idade, logo você é adulto`);
    } else if (idade >= 13) {
        console.log(`Você tem ${idade} anos de idade, logo você é adolescente`);
    } else {
        console.log(`Você tem ${idade} anos de idade, logo você é criança`);
    }
}


/* 3. Escreva um programa que pergunte o salário mensal de um funcionário e o
percentual de aumento concedido pela empresa. Caso o salário seja menor que
R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
novo salário do funcionário. */

let salario = Number(prompt("Qual seu salário? "));
let aumento = Number(prompt("Qual o percentual de aumento da sua empresa? "));
let percentual = aumento / 100;

if (salario < 1500) {
    console.log(`O seu novo salário será de R$${salario * (1 + (percentual * 2))}`);
} else {
    console.log(`O seu novo salário após aumento será de R$${salario * (1 + percentual)}`);
}

/* 4. Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar
funções prontas como Math.max(). */

let numero1 = parseInt(prompt("Digite o primeiro número: "));
let numero2 = parseInt(prompt("Digite o segundo número: "));
let numero3 = parseInt(prompt("Digite o terceiro número: "));

if (numero1 > numero2 && numero1 > numero3) {
    console.log(`O maior número é ${numero1}`);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(`O maior número é ${numero2}`);
} else {
    console.log(`O maior número é ${numero3}`);
}

/* 5. Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
programa que leia o valor total de uma compra e aplique as seguintes regras:
compras abaixo de R$ 100,00 não têm desconto;
compras entre R$ 100,00 e R$ 299,99 recebem 10% de desconto;
compras entre R$ 300,00 e R$ 499,99 recebem 15% de desconto;
compras acima de R$ 500,00 recebem 20% de desconto.
Exiba o valor original, o desconto aplicado e o valor final a pagar. */

let valorCompra = Number(prompt("Insira o valor total da compra: "));
let desconto;
let percentualDesconto;
let valorTotal;

if (!valorCompra.isNaN && valorCompra > 0) {
    if (valorCompra > 500) {
        percentualDesconto = 20;
        desconto = valorCompra * 0.2;
        valorTotal = valorCompra - desconto;
    } else if (valorCompra > 300) {
        percentualDesconto = 15;
        desconto = valorCompra * 0.15;
        valorTotal = valorCompra - desconto;
    } else if (valorCompra > 100) {
        percentualDesconto = 10;
        desconto = valorCompra * 0.1;
        valorTotal = valorCompra - desconto;
    } else {
        percentualDesconto = 0;
        desconto = 0;
        valorTotal = valorCompra;
    }
    console.log(`Valor original: R$${valorCompra.toFixed(2)}
    Desconto de ${percentualDesconto}% (R$${desconto.toFixed(2)})
    Valor total: ${valorTotal.toFixed(2)}`);
} else {
    console.log("[VALOR INVÁLIDO]");
}

/* 6. Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que
deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor
quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para
compor o saque. */

let valorSaque = parseInt(prompt("Digite um valor para sacar (múltiplo de 10) -> "));
let notas100;
let notas50;
let notas20;
let notas10;

if (!valorSaque.isNaN && valorSaque % 10 === 0 && valorSaque > 0) {
    notas100 = Math.floor(valorSaque / 100);
    valorSaque = Math.floor(valorSaque % 100);

    notas50 = Math.floor(valorSaque / 50);
    valorSaque = Math.floor(valorSaque % 50);

    notas20 = Math.floor(valorSaque / 20);
    valorSaque = Math.floor(valorSaque % 20);

    notas10 = Math.floor(valorSaque / 10);

    console.log(`Notas sacadas:
- R$100 - ${notas100}
- R$50 - ${notas50}
- R$20 - ${notas20}
- R$10 - ${notas10}`);
} else {
    console.log("[ERRO] - INSIRA UM NÚMERO MÚLTIPLO DE 10");
}

/* 7. Faça um programa que funcione como uma calculadora básica. Leia dois
números e uma operação desejada (+, -, *, /). Usando switch case, realize a
operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
de operação inválida. */

let primeiroNumero = Number(prompt("Insira o primeiro número: "));

console.log(`[+] - ADIÇÃO
[-] - SUBTRAÇÃO
[*] - MULTIPLICAÇÃO
[/] - DIVISÃO`);

let operacao = prompt(`Indique a operação que deseja realizar: `);

let segundoNumero;

switch (operacao) {
    case '+':
        segundoNumero = Number(prompt("Insira o segundo número: "));
        console.log(`Resultado: ${primeiroNumero + segundoNumero}`);
        break;
    case '-':
        segundoNumero = Number(prompt("Insira o segundo número: "));
        console.log(`Resultado: ${primeiroNumero - segundoNumero}`);
        break;
    case '*':
        segundoNumero = Number(prompt("Insira o segundo número: "));
        console.log(`Resultado: ${primeiroNumero * segundoNumero}`);
        break;
    case '/':
        segundoNumero = Number(prompt("Insira o segundo número: "));
        if (segundoNumero > 0) {
            console.log(`Resultado: ${(primeiroNumero / segundoNumero).toFixed(2)}`);
        } else {
            console.log("[ERRO] - IMPOSSÍVEL FAZER DIVISÃO POR ZERO");
        }
        break;
    default:
        console.log("[ERRO] - OPERAÇÃO INVÁLIDA");
        break;
}

/* 8. Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando
switch case. Os preços base são:
P = R$ 25,00,
M = R$ 35,00,
G = R$ 45,00.
A borda recheada acrescenta R$ 8,00 em qualquer tamanho.
Exiba o valor total do pedido. */

console.log(`[P] - Pequeno | R$ 25
[M] - Médio | R$ 35
[G] - Grande | R$ 45
Qual o tamanho desejado?`);
let tamanhoPizza = prompt("Tamanho - ").toLowerCase();

let valorPizza = 0;
let valorTotalPizza;

switch (tamanhoPizza) {
    case 'p':
        valorPizza = 25;
        break;
    case 'm':
        valorPizza = 35;
        break;
    case 'g':
        valorPizza = 45;
        break;
    default:
        console.log("INSIRA UM TAMANHO VÁLIDO");
        break;
}

if (valorPizza != 0) {
    let borda = prompt("Deseja borda recheada? ");
    if (borda.toLowerCase() == 'sim' || borda.toLowerCase() == 's') {
        valorTotalPizza = valorPizza + 8;
        console.log(` - Pizza ${tamanhoPizza.toUpperCase()} - R$${valorPizza.toFixed(2)}
 - BORDA RECHEADA - R$8,00
Valor total: R$${valorTotalPizza}`)
    } else {
        valorTotalPizza = valorPizza;
        console.log(` - Pizza ${tamanhoPizza.toUpperCase()} - R$${valorPizza.toFixed(2)}
 - SEM BORDA RECHEADA
Valor Total: R${valorTotalPizza}`);
    }
}

/* 9. Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba
o nome do mês correspondente e quantos dias ele possui. Para fevereiro,
pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29
caso seja. */

let mes = Number(prompt("Digite o número de um mês "));
let diasFev = 28;

switch (mes) {
    case 1:
        console.log("Janeiro - 31 dias");
        break;
    case 2:
        let bissexto = prompt("É ano bissexto? ");
        if (bissexto.toLowerCase() == "sim" || bissexto.toLowerCase() == "s") {
            diasFev = 29;
        }
        console.log(`Fevereiro - ${diasFev} dias`);
        break;
    case 3:
        console.log("Março - 31 dias");
        break;
    case 4:
        console.log("Abril - 30 dias");
        break;
    case 5:
        console.log("Maio - 31 dias");
        break;
    case 6:
        console.log("Junho - 30 dias");
        break;
    case 7:
        console.log("Julho - 30 dias");
        break;
    case 8:
        console.log("Agosto - 31 dias");
        break;
    case 9:
        console.log("Setembro - 30 dias");
        break;
    case 10:
        console.log("Outubro - 31 dias");
        break;
    case 11:
        console.log("Novembro - 30 dias");
        break;
    case 12:
        console.log("Dezembro - 31 dias");
        break;
    default:
        console.log("[ERRO] - INSIRA UM MÊS VÁLIDO")
        break;
}

/* 10. Um estacionamento cobra por faixas de tempo. Faça um programa que leia
quantas horas um veículo ficou estacionado e, usando switch case com
intervalos, calcule o valor a pagar conforme a tabela:
1a hora = R$ 8,00;
2a hora = R$ 6,00;
3a hora = R$ 4,00;
acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais
R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado. */

let horas = Number(prompt("Quantas horas você ficou no estacionamento? "));
let valorEstacionamento = 0;
let extras = 0;

if (!horas.isNaN) {
    switch (horas) {
        case 1:
            valorEstacionamento = 8;
            break;
        case 2:
            valorEstacionamento = 8 + 4;
            break;
        case 3:
            valorEstacionamento = 8 + 4 + 2;
            break;
        default:
            if (horas > 0) {
                extras = (horas - 3) * 2;
                valorEstacionamento = (4 * 3) + extras;
                break;
            } else if (horas === 0) {
                valorEstacionamento = 0;
                break;
            }
            break;
    }
    console.log(`Horas estacionado: ${horas}
Valor total: R$${valorEstacionamento.toFixed(2)}`);
}