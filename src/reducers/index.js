import {combineReducers} from 'redux'
import booksReducer from '../reducers/books'
import authorsReducer from '../reducers/authors'
import storagesReducer from '../reducers/storages'

export default combineReducers({
  booksReducer,
  authorsReducer,
  storagesReducer,
})