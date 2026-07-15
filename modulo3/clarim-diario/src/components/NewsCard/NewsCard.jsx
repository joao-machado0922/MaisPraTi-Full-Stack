import './NewsCard.css'

function NewsCard ({ categoria, titulo, resumo}) {
    return (
        <article className="card">
            <span className="card_categoria">{categoria}</span>
            <h3 className="card_titulo">{titulo}</h3>

            {resumo && <p className="card_resumo">{resumo}</p>}
        </article>
    )
}

export default NewsCard