import React from 'react'

const initialState = {}

export const cartReducer = (state = initialState, action) => {
  const {type} = action

  switch (type) {
    default:
      return state
  }
}
