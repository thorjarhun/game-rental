// @flow
import { createReducer } from './util'
import { ADD_SEARCH_RESULTS } from '../constants'

export default createReducer({
  games: {},
  termToGames: {}
}, {
  [ADD_SEARCH_RESULTS]: (state, {results, term}) => ({
    games: {
      ...state.games,
      ...results.reduce(
        (a,c) => Object.assign(a, {[c.id]: c}),
        {}
      )
    },
    termToGames: {
      ...state.termToGames,
      [term]: results.map(x => x.id)
    }
  })
})
