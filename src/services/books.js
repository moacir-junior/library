import axios from 'axios'

const createBook = async book => {
  try {
    const res = await axios.post('http://localhost:8000/books', book)
    return res.data
  } catch (err) {
    return err
  }
}

const readBooks = async () => {
  try {
    const res = await axios.get('http://localhost:8000/books')
    return res.data
  } catch (err) {
    return err
  }
}

const readBook = async bookId => {
  try {
    const res = await axios.get(`http://localhost:8000/books/${bookId}`)
    return res.data
  } catch (err) {
    return err
  }
}

const updateBook = async (bookId, book) => {
  try {
    const res = await axios.patch(`http://localhost:8000/books/${bookId}`, book)
    return res.data
  } catch (err) {
    return err
  }
}

const deleteBook = async bookId => {
  try {
    const res = await axios.delete(`http://localhost:8000/books/${bookId}`)
    return res.data
  } catch (err) {
    return err
  }
}

export default {
  createBook,
  readBooks,
  readBook,
  updateBook,
  deleteBook,
}