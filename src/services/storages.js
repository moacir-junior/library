import axios from 'axios'

const createStorage = async storage => {
  try {
    const res = await axios.post('http://localhost:8000/storages', storage)
    return res.data
  } catch (err) {
    return err
  }
}

const readStorages = async () => {
  try {
    const res = await axios.get('http://localhost:8000/storages')
    return res.data
  } catch (err) {
    return err
  }
}

const readStorage = async storageId => {
  try {
    const res = await axios.get(`http://localhost:8000/storages/${storageId}`)
    return res.data
  } catch (err) {
    return err
  }
}

const readStorageByBook = async bookId => {
  try {
    const res = await axios.get(`http://localhost:8000/storages/books/${bookId}`)
    return res.data
  } catch (err) {
    return err
  }
}

const updateStorage = async (storageId, storage) => {
  try {
    const res = await axios.patch(`http://localhost:8000/storages/${storageId}`, storage)
    return res.data
  } catch (err) {
    return err
  }
}

export default {
  createStorage,
  readStorages,
  readStorage,
  readStorageByBook,
  updateStorage,
}