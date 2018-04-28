// @flow
import { ACTIONS } from './constants'
import jsonp from 'jsonp'

const createActionCreator = (type, ...argNames) => (...args) =>
  argNames.reduce((a,_,i) => ({ ...a, [argNames[i]]: args[i] }), { type })

export const setApiKey = createActionCreator(ACTIONS.SET_API_KEY, 'key')
export const reset = createActionCreator(ACTIONS.RESET)
export const emptyCart = createActionCreator(ACTIONS.EMPTY_CART)
export const submitRental = createActionCreator(ACTIONS.SUBMIT_RENTAL)

const _addToCart = createActionCreator(ACTIONS.ADD_TO_CART, 'item')
export const addToCart = gameId => (dispatch, getState) =>
  // not sure how I feel about abusing redux-thunk here.. perhaps changing the call site would be cleaner
  dispatch(_addToCart(getState().api_results.games[gameId]))

const setSearchTermState = createActionCreator(ACTIONS.SET_SEARCH_TERM, 'term')
const addSearchResults = createActionCreator(ACTIONS.ADD_SEARCH_RESULTS, 'term', 'results')

export const setSearchTerm = (term: string) => (dispatch, getState) => {
  dispatch(setSearchTermState(term))
  if (term) {
    const { api_key, api_results } = getState()
    if (api_results.termToGames[term]) {
      // note that the results are paginated and we're only caching the first page using the search term as the key
      // it may be prudent to cache by offset as well
      return
    }
    const url = `http://www.giantbomb.com/api/search/?api_key=${api_key}&format=jsonp&resources=game&query=${term}`
    jsonp(url, { param: 'json_callback'}, (err, data) => {
      if (err) throw err
      dispatch(addSearchResults(term, data.results))
    })
  }
}
