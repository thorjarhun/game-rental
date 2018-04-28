// @flow
import { ADD_TO_CART, EMPTY_CART, SUBMIT_RENTAL, RESET } from '../constants'

const initialState = {
  cart: {},
  rented: []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.item.id]: action.item
        }
      }
    case SUBMIT_RENTAL:
      return {
        ...state,
        cart: {},
        rented: state.rented.concat(Object.keys(state.cart))
      }
    case EMPTY_CART:
      return {
        ...state,
        cart: {}
      }
    case RESET:
      return initialState
    default:
      return state
  }
}
