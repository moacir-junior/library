import {actionsTypes} from '../constants/storages'
 
const initial = [{ id: 1, name: 'Blumenau' },
{ id: 2, name: 'Sítio' }]

const reducer = (state = initial, action) => {
  switch(action.type){
    case actionsTypes.ADD_STORAGE:
      return [...state, action.payload]
    case actionsTypes.REMOVE_STORAGE:
      alert('A exclusão ainda não foi implementada') 
      return state
    default:
      return state
  }
}

export default reducer