let itens = []

function adicionarItem(nome, preco) {
    itens.push({ nome, preco })
}

function calcularTotal() {
    return itens.reduce((total, item) => total + item.preco, 0)
}

function limparCarrinho() {
    itens = [];
}

function contarItens() {
    return itens.length;
}

function atualizarTela() {
    document.getElementById('qtd').textContent = contarItens();
    document.getElementById('total').textContent = calcularTotal().toFixed(2);
}

module.exports = { adicionarItem, calcularTotal, limparCarrinho, contarItens }