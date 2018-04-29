// @flow
import { createReducer } from './util'
import { SET_SEARCH_TERM } from '../constants'

export default createReducer('', {
  [SET_SEARCH_TERM]: (state, {term}) => term
})
