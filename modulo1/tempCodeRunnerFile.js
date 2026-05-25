const turma = [
    {nome: "Alice", nota: 9.0},
    {nome: "Bruno", nota: 5.5},
    {nome: "Carla", nota: 7.0},
    {nome: "Daniel", nota: 3.8},
    {nome: "Elisa", nota: 8.2}
];

turma.forEach((aluno) => {
    if (aluno.nota >= 7) {
        console.log(`${aluno.nome}, nota: ${aluno.nota} -> APROVADO!`)
    } else if (aluno.nota >= 4) {
        console.log(`${aluno.nome}, nota: ${aluno.nota} -> RECUPERAÇÃO!`)
    } else {
        console.log(`${aluno.nome}, nota: ${aluno.nota} -> REPROVADO!`)
    }
})