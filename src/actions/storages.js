export const actions = {
  add: (storage) => ({
    type: 'ADD_STORAGE',
    payload: storage,
  }),
  remove: (storage) => ({
    type: 'REMOVE_STORAGE',
    payload: storage,
  }),
}