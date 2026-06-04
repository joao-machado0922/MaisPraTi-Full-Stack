let livros = [
    {titulo: "Casas Estranhas", autor: "Uketsu"},
    {titulo: "Jurassic Park", autor: "Michael Crichton"}
]


for (const {titulo, autor} of livros) {
    console.log(titulo, autor);
}