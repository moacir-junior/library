import {actionsTypes} from '../constants/authors'
 
const initial = [{ id: 1, name: 'Machado de Assis' },
  { id: 2, name: 'Joaquim Manuel de Macedo' },
  { id: 3, name: 'José de Alencar' }]

const reducer = (state = initial, action) => {
  switch(action.type){
    case actionsTypes.ADD_AUTHOR:
      return [...state, action.payload]
    case actionsTypes.REMOVE_AUTHOR:
      alert('A exclusão ainda não foi implementada') 
      return state
    default:
      return state
  }
}

export default reducer