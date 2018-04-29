// @flow
import { createReducer } from './util'
import { ADD_TO_CART, EMPTY_CART, SUBMIT_RENTAL } from '../constants'

export default createReducer({
  cart: {},
  rented: []
}, {
  [ADD_TO_CART]: (state, {item}) => ({
    ...state,
    cart: {
      ...state.cart,
      [item.id]: item
    }
  }),
  [SUBMIT_RENTAL]: state => ({
    ...state,
    cart: {},
    rented: state.rented.concat(Object.keys(state.cart))
  }),
  [EMPTY_CART]: state => ({
    ...state,
    cart: {}
  })
})
