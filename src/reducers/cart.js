// @flow
import { ADD_TO_CART, EMPTY_CART, RESET } from '../constants'

const initialState = []

export default (state=initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state.concat(action.item)
    case EMPTY_CART:
    case RESET:
      return initialState
    default:
      return state
  }
}
