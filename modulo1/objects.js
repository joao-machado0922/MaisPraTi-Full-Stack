let livro = {
    titulo: "Casas Estranhas",
    autor: "Uketsu",
    tema: "Terror"
}

for (const chave in livro) {
    console.log(livro[chave]);
}

let frutas = ['Maçã', "Uva", "Banana"];

for (const [index, value] of frutas.entries()) {
    console.log(index, value);
}

let livros = [
    {titulo: "Casas Estranhas", autor: "Uketsu"},
    {titulo: "Jurassic Park", autor: "Michael Crichton"}
]

console.table(livros);

for (const {titulo, autor} of livros) {
    console.log(titulo, autor);
}

for (const i in livros) {
    console.log(i)
    console.log(livros[i].titulo)
}