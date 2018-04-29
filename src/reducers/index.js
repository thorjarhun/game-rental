// @flow
import { combineReducers } from 'redux'
import api_key from './api_key'
import api_results from './api_results'
import search_term from './search_term'
import user from './user'
import { RESET } from '../constants'

const reducers = combineReducers({
  api_key,
  api_results,
  search_term,
  user
})

export default (state, action) =>
  action.type === RESET
    ? reducers(undefined, action)
    : reducers(state, action)
