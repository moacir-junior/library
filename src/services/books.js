import axios from 'axios'

const createBook = async book => {
  try {
    const res = await axios.post('http://localhost:8000/books', book)
    return res.data
  } catch (err) {
    return err
  }
}

const readBooks = async (authorId, storageId) => {
  let params = []
  let url = 'http://localhost:8000/books'

  if(authorId)
    params.push(`author=${authorId}`)

  if(storageId)
    params.push(`storage=${storageId}`)

  if(params.length){
    url = url.concat('?')

    params.forEach((param, index) => {
      if(index === 0){
        url = url.concat(param) 
      }
      else{
        url = url.concat(`&${param}`)
      }
    });
  }

  console.log('URL', url)
  
  try {
    const res = await axios.get(url)
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