import { buscarCep } from "../services/viacep.js";
import { registrar } from "../services/autenticador.js";

let form = document.querySelector('#form-cadastro');
let campoCep = document.querySelector('#cep');
let aviso = document.querySelector('#aviso');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const usuario = {
        nome: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        senha: document.querySelector("#senha").value,
        cep: campoCep.value,
        logradouro: document.querySelector('#logradouro').value,
        bairro: document.querySelector('#bairro').value,
        cidade: document.querySelector('#cidade').value,
        uf: document.querySelector('#uf').value
    }

    try {
        registrar(usuario);
        alert("Cadastro realizado! Faça login para continuar.");
        aviso.textContent = "";
        window.location.href = "login.html";
    } catch (erro) {
        aviso.textContent = erro.message;
    }
})

campoCep.addEventListener('blur', async () => {
    if (!campoCep.value) return

    try {
        let endereco = await buscarCep(campoCep.value);
        document.querySelector('#logradouro').value = endereco.logradouro;
        document.querySelector('#bairro').value = endereco.bairro;
        document.querySelector('#cidade').value = endereco.localidade;
        document.querySelector('#uf').value = endereco.uf;
    } catch (error) {
        console.error(error.message);
    }
})