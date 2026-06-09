const prompt = require('prompt-sync')()

/* 1. Crie um objeto representando um produto com as propriedades: nome, preço,
categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
propriedades e seus valores. Em seguida, adicione uma nova propriedade
desconto ao objeto e exiba o preço final calculado. */

let produto = {
    nome: "Camiseta do Grêmio edição colecionador 2002",
    preco: 1500,
    categoria: "Vestuário",
    quantidadeEstoque: 1
}

for (const key in produto) {
    console.log(`${key} - ${produto[key]}`);
}

produto.desconto = 12;

produto.preco = Number((produto.preco * (1 - (produto.desconto / 100))).toFixed(2));

console.table(`Preço com ${produto.desconto}% de desconto: R$${produto.preco}`);

/* ---------------------------------------------------------------------------------- */

/* 2. Crie dois objetos representando personagens de um jogo, cada um com as
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
cada personagem lado a lado e determine qual deles tem maior poder total
(soma de vida + ataque + defesa). */

const char1 = {
    nome: "Mega Charizard Y",
    vida: 78,
    ataque: 159,
    defesa: 115,
}

const char2 = {
    nome: "Rayquaza",
    vida: 105,
    ataque: 150,
    defesa: 90,
}

let totalChar1 = 0;
let totalChar2 = 0;

for (const key in char1) {
    console.log(key);
    console.log(`${char1[key]} - ${char2[key]}`);
    if (typeof(char1[key]) == "number") {
        totalChar1 += char1[key];
        totalChar2 += char2[key];
    }
}

console.log(`Total ${totalChar1} x ${totalChar2}`);

if (totalChar1 > totalChar2) {
    console.log(`${char1.nome} tem a maior soma de status`);
} else if (totalChar2 > totalChar1) {
    console.log(`${char2.nome} tem a maior soma de status`);
} else {
    console.log("EMPATE");
}

/* ---------------------------------------------------------------------------------- */

/* 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
experiência. Use for...in para listar todos os dados. Com base nos anos de
experiência, calcule e exiba o bônus anual:
até 2 anos = 5% do salário,
de 3 a 5 anos = 10%,
acima de 5 anos = 15%. */

const funcionario = {
    nome: "João Pedro",
    cargo: "Desenvolvedor Back-end",
    salario: 3456.96,
    anosExperiencia: 6,
}

for (const key in funcionario) {
    console.log(`${key} - ${funcionario[key]}`);
}

if (funcionario.anosExperiencia > 5) {
    console.log(`Bônus de 15% - R$${(funcionario.salario * 1.15).toFixed(2)}`);
} else if (funcionario.anosExperiencia > 3) {
    console.log(`Bônus de 10% - R$${(funcionario.salario * 1.10).toFixed(2)}`);
} else if (funcionario.anosExperiencia >= 0) {
    console.log(`Bônus de 5% - R$${(funcionario.salario * 1.05).toFixed(2)}`);
}

/* ---------------------------------------------------------------------------------- */

/* 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
listar o inventário completo. Permita que o usuário informe um item para usar:
reduza a quantidade em 1 ou exiba "item esgotado" se for zero. */

const inventario = {
    rareCandy: 1,
    revive: 2,
    potion: 24,
    fullRestore: 4,
    tm050: 2,
    hm002: 1
}

let usarItem = "";
let itemUsado = "";

do {
    console.log("----------------------");
    for (const key in inventario) {
        console.log(`${key}: ${inventario[key]}`);
    }
    console.log("----------------------");
    usarItem = prompt("Deseja usar um item? ");
    if (usarItem.toLowerCase() === "sim" || usarItem.toLowerCase() === "s") {
        for (const key in inventario) {
            console.log(` - ${key}`);
        }
        itemUsado = prompt("Qual item? ");
        if (inventario[itemUsado] <= 0) {
            console.log(`[ERRO] VOCÊ NÃO TEM MAIS ESSE ITEM NO INVENTÁRIO`);
        } else {
            console.log(`${itemUsado} consumido`);
            inventario[itemUsado] --;
        }
        console.log("----------------------");
    }
} while (usarItem.toLowerCase() === "sim" || usarItem.toLowerCase() === "s");

/* ---------------------------------------------------------------------------------- */

/* 5. Crie um objeto representando o orçamento mensal de uma pessoa, com
categorias como alimentação, transporte, lazer e saúde, cada uma com valor
planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês. */

const orcamento = {
    alimentacao: {
        previsto: 510,
        gasto: 600
    },
    transporte: {
        previsto: 220,
        gasto: 170
    },
    lazer: {
        previsto: 150,
        gasto: 400
    },
    saude: {
        previsto: 100,
        gasto: 10
    },
}

let saldoPrevisto = 0;
let saldoReal = 0;

for (const key in orcamento) {
    console.log(`${key}:
    - Previsto: R$${(orcamento[key].previsto).toFixed(2)}
    - Gasto: R$${(orcamento[key].gasto).toFixed(2)}`);
    if (orcamento[key].previsto >= orcamento[key].gasto) {
        console.log(`Gastos com ${key} dentro do previsto para o mês`);
    } else {
        console.log(`Gastos com ${key} acima do previsto para o mês`);
    }
    saldoPrevisto += orcamento[key].previsto;
    saldoReal += orcamento[key].gasto;
}

console.log(`Gastos previstos: R$${saldoPrevisto.toFixed(2)}`);
console.log(`Gastos totais: R$${saldoReal.toFixed(2)}`);
console.log(`Saldo de R$${(saldoPrevisto - saldoReal).toFixed(2)}`);

/* ---------------------------------------------------------------------------------- */

/* 6. Crie um array de objetos representando músicas, cada uma com título, artista e
duração em segundos. Use for...of para exibir cada música no formato "Artista —
Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
mesmo formato. */

let album = [
    {titulo: "Beat It", artista: "Michael Jackson", duracao: 299},
    {titulo: "Shadow 4EVER", artista: "MC VV", duracao: 206},
    {titulo: "Sua Agonia", artista: "Enygma", duracao: 360},
    {titulo: "Shikisai", artista: "Yama", duracao: 193},
    {titulo: "PARANOIA", artista: "HEARTSTEEL", duracao: 224},
]

console.log("Playlist: SÓ AS TOP");
for (const {titulo, artista, duracao} of album) {
    console.log(`   - ${artista} - ${titulo} (${String(parseInt(duracao / 60)).padStart(2, '0')}:${String(duracao % 60).padStart(2, '0')})`);
}

let somaSegundos = 0;

album.forEach((a) => {
    somaSegundos += a.duracao;
})

console.log(`Tempo total ${String(parseInt(somaSegundos / 60)).padStart(2, '0')}:${String(somaSegundos % 60).padStart(2, '0')}`);

/* ---------------------------------------------------------------------------------- */

/* 7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
forEach para calcular e exibir separadamente a média dos aprovados e a média
dos reprovados. */

const alunos = [
    {nome: "Xepória Maria", nota: 7},
    {nome: "Manuela Christina", nota: 3},
    {nome: "Gregório Antônio", nota: 7},
    {nome: "Hebe Catarina", nota: 10},
    {nome: "Luke Oliveira", nota: 6},
    {nome: "Leia Oliveira", nota: 1}
];

let situacao = "";
let counterAluno = 0;
let mediaAprovados = 0;
let mediaReprovados = 0;

for (const {nome, nota} of alunos) {
    if (nota >= 7) {
        situacao = "APROVADO";
    } else if (nota >= 4) {
        situacao = "RECUPERAÇÃO"
    } else {
        situacao = "REPROVADO"
    }
    console.log(`${nome}: Nota ${nota} | ${situacao}`);
}

alunos.forEach((a) => {
    if (a.nota >= 7) {
        mediaAprovados += a.nota;
        counterAluno++;
    }
})
console.log(`Média dos alunos aprovados: ${(mediaAprovados / counterAluno).toFixed(2)}`);
counterAluno = 0;

alunos.forEach((a) => {
    if (a.nota < 4) {
        mediaReprovados += a.nota;
        counterAluno++;
    }
});
console.log(`Média dos alunos reprovados: ${(mediaReprovados / counterAluno).toFixed(2)}`);

/* ---------------------------------------------------------------------------------- */

/* 8. Crie um array de objetos representando produtos com nome, preço e quantidade.
Use forEach para calcular o valor total em estoque de cada produto (preço ×
quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
estoque. */

const produtos = [
    {nome: "Notebook", preco: 3500.00, quantidade: 5},
    {nome: "Mouse", preco: 80.50, quantidade: 20},
    {nome: "Teclado", preco: 150.00, quantidade: 15},
    {nome: "Monitor", preco: 1200.00, quantidade: 8},
    {nome: "Headset", preco: 250.90, quantidade: 12},
    {nome: "Webcam", preco: 320.00, quantidade: 10},
    {nome: "SSD 1TB", preco: 450.00, quantidade: 7}
];

let precoTotal = 0;

console.log("Lista de produtos:");
produtos.forEach((p) => {
    console.log(`   - ${p.nome} - R$${p.preco.toFixed(2)} | Em estoque: ${p.quantidade}`);
    precoTotal += p.preco * p.quantidade;
})

console.log(`Valor total do estoque: R$${precoTotal.toFixed(2)}`);

/* ---------------------------------------------------------------------------------- */

/* 9. Crie um array de objetos onde cada objeto representa um contato com nome,
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
uma mensagem de "não encontrado". */

const contatos = [
    { nome: "Ana Silva", telefone: "(51) 99911-2233", email: "ana.silva@gmail.com" },
    { nome: "Bruno Costa", telefone: "(51) 99822-3344", email: "bruno.costa@gmail.com" },
    { nome: "Carla Souza", telefone: "(51) 99733-4455", email: "carla.souza@gmail.com" },
    { nome: "Daniel Oliveira", telefone: "(51) 99644-5566", email: "daniel.oliveira@gmail.com" },
    { nome: "Eduarda Lima", telefone: "(51) 99555-6677", email: "eduarda.lima@gmail.com" },
    { nome: "Felipe Rocha", telefone: "(51) 99466-7788", email: "felipe.rocha@gmail.com" },
    { nome: "Gabriela Martins", telefone: "(51) 99377-8899", email: "gabriela.martins@gmail.com" },
    { nome: "Henrique Alves", telefone: "(51) 99288-9900", email: "henrique.alves@gmail.com" },
    { nome: "Isabela Ferreira", telefone: "(51) 99199-1010", email: "isabela.ferreira@gmail.com" },
    { nome: "Marcos Pereira", telefone: "(51) 99010-2020", email: "marcos.pereira@gmail.com" },
    { nome: "Bruno Pereira", telefone: "(51) 98468-1578", email: "bruno.pereira@gmail.com" },
];

contatos.forEach((c) => {
    console.log(`${c.nome}: ${c.telefone} | ${c.email}`);
});

let nomePesquisa = "";
let opcaoPesquisa = prompt("Deseja procurar por um contato? ");
let contatosEncontrados = 0;

while (opcaoPesquisa.toLowerCase() == "sim" || opcaoPesquisa.toLowerCase() == "s") {
    contatosEncontrados = 0;
    nomePesquisa = prompt("Digite o nome do contato: ");
    for (const {nome, telefone, email} of contatos) {
        if (nome.toLowerCase().startsWith(nomePesquisa.toLowerCase())) {
            console.log(`${nome}: ${telefone} | ${email}`);
            contatosEncontrados++
        }
    }
    if (contatosEncontrados == 0) {
        console.log("Não encontrado");
    }
    opcaoPesquisa = prompt("Deseja procurar outro contato? ");
}

/* ---------------------------------------------------------------------------------- */

/* 10. Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
cada operação. */

let navegador = ["Página Inicial"];

function visitarPagina (value) {
    navegador.push(value);
}

function voltarPagina() {
    if (navegador.length > 1) {
        navegador.pop();
    } else {
        console.log("Não é mais possível voltar");
    }
}

function exibirPaginaAtual() {
    console.log(`Você está vendo a página "${navegador[navegador.length - 1]}"`);
}

visitarPagina("Amazon");
exibirPaginaAtual();
visitarPagina("Youtube");
exibirPaginaAtual();
visitarPagina("Instagram");
exibirPaginaAtual();
visitarPagina("Panini");
exibirPaginaAtual();
voltarPagina();
exibirPaginaAtual();
voltarPagina();
exibirPaginaAtual();

/* ---------------------------------------------------------------------------------- */

/* 11. Implemente uma fila usando um array para simular o atendimento de uma
clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
exibindo o estado da fila a cada operação. */

let filaClinica = [];

function chegouPaciente(value) {
    filaClinica.push(value);
}

function chamarProximo() {
    if (filaClinica.length === 0) {
        console.log("Não tem ninguém na fila");
    } else {
        filaClinica.shift();
    }
}

function exibirFila() {
    filaClinica.forEach((p, index) => {
        console.log(`${index + 1}º paciente: ${p}`);
    })
    console.log("------------------------");
}

chegouPaciente("Antônio Roberto");
exibirFila();
chegouPaciente("Roberval");
exibirFila();
chegouPaciente("Steve Trabalhos");
exibirFila();
chamarProximo();
exibirFila();
chegouPaciente("Codifica Edu");
exibirFila();
chegouPaciente("Eduardo Fonseca");
exibirFila();
chamarProximo();
exibirFila();
chamarProximo();
exibirFila();

/* ---------------------------------------------------------------------------------- */

/* 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
exiba a lista antes e depois. */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    adicionar(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode
        } else {
            let lastNode = this.head;

            while (lastNode.next != null) {
                lastNode = lastNode.next;
            }

            lastNode.next = newNode;
        }

        this.length++;

    }

    remover(value) {
        if (this.length > 0) {
            if (this.head.value == value) {
                if (this.length === 1) {
                    this.head = null;
                } else {
                    this.head = this.head.next;
                }
                this.length--;
                return;
            } else {
                for (let i = this.head; i != null; i = i.next) {
                    if (i.next != null && i.next.value == value) {
                        i.next = i.next.next;
                        this.length--;
                        return;
                    }
                }
            }
        } else {
            console.log("A lista já está vazia");
        }
    }

    exibir() {
        console.log("---------------------------------");
        for (let i = this.head; i != null; i = i.next) {
            console.log(`${i.value}`);
        }
        console.log("---------------------------------\n");
    }
}

let lista = new LinkedList();

lista.adicionar("Visual Studio Code");
lista.adicionar("Microsoft Edge");
lista.adicionar("Node");
lista.adicionar("Steam");

lista.exibir();

lista.remover("Steam");

lista.exibir();

/* ---------------------------------------------------------------------------------- */