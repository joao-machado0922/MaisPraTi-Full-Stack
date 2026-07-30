import 'EnderecoForm.css';

function EnderecoForm() {
    return (
        <form id="form-cadastro" class="formulario">
            <h1>Criar conta</h1>
            <label for="nome">Nome Completo</label>
            <input type="text" id="nome" required />

            <label for="email">Email</label>
            <input type="email" id="email" required />

            <label for="senha">Senha</label>
            <input type="password" id="senha" required />

            <label for="cep">CEP</label>
            <input type="text" id="cep" placeholder="00000-000" maxlength="8" required />

            <div class="linha">
                <div class="campo-largo">
                    <label for="logradouro">Rua</label>
                    <input type="text" id="logradouro" required />
                </div>

                <div class="campo-curto">
                    <label for="numero">Número</label>
                    <input type="text" id="numero" required />
                </div>
            </div>

            <label for="bairro">Bairro</label>
            <input type="text" id="bairro" required />

            <div class="linha">
                <div class="campo-largo">
                    <label for="cidade">Cidade</label>
                    <input type="text" id="cidade" required />
                </div>

                <div class="campo-curto">
                    <label for="uf">UF</label>
                    <input type="text" id="uf" maxlength="2" required />
                </div>
            </div>

            <p class="aviso" id="aviso"></p>
            <button type="submit" class="btn btn--primary">Cadastrar</button>

        </form>
    )
}

export default EnderecoForm