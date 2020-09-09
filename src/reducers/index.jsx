const initialState = {}

export const cartReducer = (state = initialState, action) => {
  const { type, item, id } = action

  switch (type) {
    case 'ADD_ITEM': {
      if (state[item.id]) {
        const quantity = state[item.id].quantity + 1
        return { ...state, [item.id]: { ...item, quantity } }
      }
      return { ...state, [item.id]: { ...item, quantity: 1 } }
    }
    case 'REMOVE_ITEM': {
      const stateCopy = { ...state }
      delete stateCopy[id]
      return { ...stateCopy }
    }
    case 'UPDATE_ITEM':
      return { ...state, [id]: { ...item } }
    default:
      return state
  }
}

export const getStoreItemArray = (state) => Object.values(state)
