import React from 'react'

export default function FormNewAuthor(){
    return (
        <form action="">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name"/>

            <button type="submit">Gravar</button>
        </form>
    )
}