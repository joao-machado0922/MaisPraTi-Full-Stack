function soma(a, b) {
    return a + b;
}

/* const resultado = soma(2, 3);

if (resultado === 5) {
    console.log('Passou no teste');
} else {
    console.log('Reprovou no teste');
} */

//AAA - Arrange, Act, Assert
// Arrange - Organizar, prepara os dados de entrada
// Act - Agir, executa a função que quer testar
// Assert - Verificar, compara o resultado esperado com o adquirido

function testarSoma() {
    const a = 2;
    const b = 3;

    const resultado = soma(a, b);

    console.assert(resultado === 5, "Soma(2, 3) deveria ser 5");
}

testarSoma();