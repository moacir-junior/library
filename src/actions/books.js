export const actions = {
  add: (book) => ({
    type: 'ADD_BOOK',
    payload: book,
  }),
  remove: (book) => ({
    type: 'REMOVE_BOOK',
    payload: book,
  }),
}