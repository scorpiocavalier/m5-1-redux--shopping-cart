import React from 'react'

const initialState = {}

export cartReducer = (state = initialState, action) => {
  const {type} = action

  switch (type) {
    default:
      return state
  }
}
