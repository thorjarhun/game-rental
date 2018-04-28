// @flow
import { ADD_SEARCH_RESULTS, RESET } from '../constants'

const initialState = {
  games: {},
  termToGames: {}
}

export default (state=initialState, action) => {
  switch (action.type) {
    case ADD_SEARCH_RESULTS:
      return {
        games: {
          ...state.games,
          ...action.results.reduce(
            (a,c) => Object.assign(a, {[c.id]: c}),
            {}
          )
        },
        termToGames: {
          ...state.termToGames,
          [action.term]: action.results.map(x => x.id)
        }
      }
    case RESET:
      return initialState
    default:
      return state
  }
}
