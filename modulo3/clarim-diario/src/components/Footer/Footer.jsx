import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer_info">
                <h4><strong>Clarim Diário</strong></h4>
                <p>Alta credibilidade, Dirigo J. Jonah Jameson</p>
            </div>
            <div className="footer_info">
                <h4>Editoriais</h4>
                <a href="">Política</a>
                <a href="">Cultura</a>
                <a href="">Esportes</a>
                <a href="">Homem-Aranha</a>
            </div>
            <div className="footer_info">
                <h4>Institucional</h4>
                <a href="">Termos de Uso</a>
                <a href="">Privacidade</a>
                <a href="">Quem Somos</a>
                <a href="">Contato</a>
            </div>
        </footer>
    )
}

export default Footer