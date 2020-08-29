import React from 'react'

const livros = [{id: 1, name: 'Helena', author: 'Machado de Assis', year: '1890', eval: 7, comment: 'Cansativo'},
{id: 2, name: 'A Moreninha', author: 'Joaquim Manuel de Macedo', year: '1895', eval: 8, comment: 'É doce'},
{id: 3, name: 'Iracema', author: 'José de Alencar', year: '1897', eval: 8, comment: 'Bom'}]

export default function BooksTable(){
    return (
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Autor</th>
                    <th>Ano</th>
                    <th>Avaliação</th>
                    <th>Comentário</th>
                </tr>
            </thead>
            
            <tbody>
                {livros.map(book => 
                <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.year}</td>
                    <td>{book.eval}</td>
                    <td>{book.comment}</td>
                </tr>)}
            </tbody>
        </table>
    )
}