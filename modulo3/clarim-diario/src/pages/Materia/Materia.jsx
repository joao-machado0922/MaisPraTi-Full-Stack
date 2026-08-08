import { useParams, Link } from 'react-router-dom';
import { buscarNoticia } from '../../services/noticias';
import './Materia.css';
import { useEffect, useState } from 'react';

function Materia() {
    const { id } = useParams();

    const [noticia, setNoticia] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState('');

    useEffect(() => {
        async function carregarNoticia() {
            try {
                setCarregando(true);
                setErro('');
                const dado = await buscarNoticia(id);
                setNoticia(dado);
            } catch {
                setErro('Matéria não encontrada - nem o Homem Aranha some tão rápido');
            } finally {
                setCarregando(false);
            }
        }

        carregarNoticia();
    }, [id]);

    if(carregando) return <p className="aviso-tela">Carregando a notícia...</p>

    if(erro) {
        return (
            <main className="container materia">
                <p className="aviso-tela">{erro}</p>
                <p style={{ textAlign: 'center'}}>
                    <Link to="/">← Voltar à capa</Link>
                    </p>
            </main>
        )
    }

    if (!noticia) {
        return (
            <main className="container">
                <p>Matéria não encontrada - Nem o Homem-Aranha destruíria uma página tão rápido</p>
                <Link to="/">Voltar à capa</Link>
            </main>
        )
    }

    return (
        <main className="container materia">
            <Link to="/" className="materia_voltar">Voltar à capa</Link>
            <span className="materia_categoria">{noticia.categoria}</span>
            <h1>{noticia.titulo}</h1>
            <p className="materia_resumo">{noticia.resumo}</p>
            <div className="materia_texto">
                <p>{noticia.texto}</p>
            </div>
        </main>
    )
}

export default Materia