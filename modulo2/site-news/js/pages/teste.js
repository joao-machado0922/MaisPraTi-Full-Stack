import { buscarCep } from "../services/viacep.js";

let cepTeste = document.querySelector('#cepTeste');
let buttonCep = document.querySelector('#buttonCEP');

buttonCep.addEventListener('click', async () => {
    event.preventDefault();
    if (!cepTeste.value) return

    try {
        let endereco = await buscarCep(cepTeste.value);
        document.querySelector('#logradouro').value = endereco.logradouro;
        document.querySelector('#bairro').value = endereco.bairro;
        document.querySelector('#cidade').value = endereco.localidade;
        document.querySelector('#uf').value = endereco.uf;
    } catch (error) {
        console.error(error.message);
    }
})