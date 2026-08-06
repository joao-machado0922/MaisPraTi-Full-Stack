import { Link } from 'react-router-dom';
import './Header.css';
import { useAuth } from '../../contexts/AuthContext';

function Header({ tema, aoAlterarTema }) {

    const { usuario, logout } = useAuth();

    const today = new Date().toLocaleDateString('pt-BR',
        {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })

    return (
        <header className="cabecalho">
            <div className="cabecalho_faixa">
                <span>Edição de Nova York</span>
                <span>{today}</span>
                {usuario ? (
                    <span className="cabecalho_sessao">
                        Olá, {usuario.nome} -
                        <Link to='/painel'> Painel</Link> -
                        <button className="cabecalho_sair" onClick={logout}> Sair</button>
                    </span>
                ) : (
                    <Link to='/login' className="cabecalho_entrar">Entrar</Link>
                )}
                <span>U$ 1.50</span>
                <button className="cabecalho_tema" onClick={aoAlterarTema}>
                    {tema === 'light' ? '🌙 Escuro' : '☀️ Claro'}
                </button>
            </div>
            <h1 className="cabecalho_titulo">O CLARIM DIÁRIO</h1>
            <p className="cabecalho_lema">A verdade, doa a quem doer - Inclusive a certos aracnídeos</p>

            <nav className="cabecalho_menu">
                <Link to="/">Capa</Link>
                <a href="">Cidade</a>
                <a href="">Ameaças Urbanas</a>
                <a href="">Opinião do Editor</a>
                <Link to="/cadastro">Assine</Link>
            </nav>
        </header>
    )
}

export default Header;