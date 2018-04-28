// @flow
import { combineReducers } from 'redux'
import api_key from './api_key'
import api_results from './api_results'
import search_term from './search_term'
import cart from './cart'

export default combineReducers({
  api_key,
  api_results,
  search_term,
  cart
})
