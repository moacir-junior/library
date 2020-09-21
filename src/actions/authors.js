export const actions = {
  add: (author) => ({
    type: 'ADD_AUTHOR',
    payload: author,
  }),
  remove: (author) => ({
    type: 'REMOVE_AUTHOR',
    payload: author,
  }),
}