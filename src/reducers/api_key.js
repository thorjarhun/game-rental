// @flow
import { createReducer } from './util'
import { SET_API_KEY } from '../constants'

export default createReducer('', {
  [SET_API_KEY]: (state, {key}) => key
})
