import React from 'react'

const authors = [{id: 1, name: 'Machado de Assis'},
{id: 2, name: 'Joaquim Manuel de Macedo'},
{id: 3, name: 'José de Alencar'}]

export default function(){
    return (
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                {authors.map(author => 
                    <tr key={author.id}>
                        <td>{author.id}</td>
                        <td>{author.name}</td>
                    </tr>)}
            </tbody>
        </table>
    )
}