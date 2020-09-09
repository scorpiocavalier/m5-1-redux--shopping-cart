const initialState = {}

export const cartReducer = (state = initialState, action) => {
  const { type, item, id } = action

  switch (type) {
    case 'ADD_ITEM':
      return { ...state, [item.id]: { ...item, quantity: 1 } }
    case 'REMOVE_ITEM': {
      const stateCopy = { ...state }
      delete stateCopy[id]
      return { ...stateCopy }
    }
    default:
      return state
  }
}

export const getStoreItemArray = (state) => Object.values(state)
