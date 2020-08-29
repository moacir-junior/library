import React from 'react'

export default function FormNewBook(){
    return (
        <form action="">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name"/>

            <label htmlFor="author">Autor</label>
            <input type="text" id="author"/>

            <label htmlFor="year">Ano</label>
            <input type="text" id="year"/>

            <label htmlFor="eval">Avaliação</label>
            <input type="text" id="eval"/>

            <label htmlFor="comment">Comentário</label>
            <input type="text" id="comment"/>

            <button type="submit">Gravar</button>
        </form>
    )
}