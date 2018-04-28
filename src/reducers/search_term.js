// @flow
import { SET_SEARCH_TERM, RESET } from '../constants'

const initialState = ''

export default (state=initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.term
    case RESET:
      return initialState
    default:
      return state
  }
}
