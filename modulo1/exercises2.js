let carro = {
    cor: "Vermelho",
    placa: "ABC-0D12",
    portas: 4,
    temEscada: false,
    modelo: "Corsa",
}

for (const key in carro) {
    console.log(`${key}: ${carro[key]}`);
}

let cidades = ["Pallet", "Viridian", "Pewter", "Cerulean", "Vermilion", "Lavender", "Celadon", "Fuchsia", "Saffron", "Cinnabar"];

for (const c of cidades) {
    if (c.startsWith("S")) {
        console.log(c);
    }
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
soma = 0;

numeros.forEach((n) => {
    soma += n;
})

console.log(soma);

const turma = [
    {nome: "Alice", nota: 9.0},
    {nome: "Bruno", nota: 5.5},
    {nome: "Carla", nota: 7.0},
    {nome: "Daniel", nota: 3.8},
    {nome: "Elisa", nota: 8.2}
];

turma.forEach((aluno) => {
    
})