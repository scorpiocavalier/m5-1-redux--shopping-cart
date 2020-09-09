const initialState = {}

export const cartReducer = (state = initialState, action) => {
  const { type, item } = action

  switch (type) {
    case 'ADD_ITEM':
      return { ...state, [item.id]: { ...item, quantity: 1 } }
    default:
      return state
  }
}

export const getStoreItemArray = (state) => Object.values(state)