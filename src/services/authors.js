import axios from 'axios'

const createAuthor = async author => {
  try{
    const res = await axios.post('http://localhost:8000/authors', author)
    return res.data
  }catch(err){
    return err
  }
}

const readAuthors = async () => {
  try{
    const res = await axios.get('http://localhost:8000/authors')
    return res.data
  }catch(err){
    return err
  }
}

const readAuthor = async authorId => {
  try{
    const res = await axios.get(`http://localhost:8000/authors/${authorId}`)
    return res.data
  }catch(err){
    return err
  }
}

const readAuthorByBook = async bookId => {
  try{
    const res = await axios.get(`http://localhost:8000/authors/books/${bookId}`)
    return res.data
  }catch(err){
    return err
  }
}

const updateAuthor = async (authorId, author) => {
  try{
    const res = await axios.patch(`http://localhost:8000/authors/${authorId}`, author)
    return res.data
  }catch(err){
    return err
  }
}

export default {
  createAuthor,
  readAuthors,
  readAuthorByBook,
  readAuthor,
  updateAuthor,
}