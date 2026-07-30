import { Link, useNavigate } from 'react-router-dom'
import './NewsCard.css'

function NewsCard({ id, categoria, titulo, resumo }) {
    const navigate = useNavigate();
    return (
        <article className="card" onClick={() => navigate(`materia/${id}`)}>
            <span className="card_categoria">{categoria}</span>
            <h3 className="card_titulo">{titulo}</h3>
            {resumo && <p className="card_resumo">{resumo}</p>}
        </article>
    )
}

export default NewsCard