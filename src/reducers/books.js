import {actionsTypes} from '../constants/books'

const initial = [{id: 1, name: 'Helena', author: 'Machado de Assis', storage: 'Blumenau', year: '1890', evaluation: 3, comment: 'Cansativo'},
{id: 2, name: 'A Moreninha', author: 'Joaquim Manuel de Macedo', storage: 'Blumenau', year: '1895', evaluation: 4, comment: 'É doce'},
{id: 3, name: 'Iracema', author: 'José de Alencar', storage: 'Sítio', year: '1897', evaluation: 4, comment: 'Bom'},
{id: 4, name: 'O Cortiço', author: 'Aluisio Azevedo', storage: 'Blumenau', year: '1890', evaluation: 3, comment: 'Entediante'},]

const reducer = (state = initial, action) => {
  switch(action.type){
    case actionsTypes.ADD_BOOK:
      return [...state, action.payload]
    case actionsTypes.REMOVE_BOOK:
      alert('A exclusão ainda não foi implementada')
      return state
    default:
      return state
  }
}

export default reducer