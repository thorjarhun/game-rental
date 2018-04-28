// @flow
import { SET_API_KEY, RESET } from '../constants'

const initialState = ''

export default (state=initialState, action) => {
  switch (action.type) {
    case SET_API_KEY:
      return action.key
    // case RESET:
    //   return initialState
    default:
      return state
  }
}
