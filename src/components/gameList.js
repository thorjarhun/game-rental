// @flow
import React from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { addToCart } from '../actions'

export default connect(
  state => ({
    games: state.api_results.termToGames[state.search_term] || [],
    cart: state.cart
  })
)(({games, cart}) =>
  <div>
    {!!games.length && <div>Select a game to add to cart</div>}
    <ListGroup>
    {
      games.map(gameId =>
        !cart.includes(gameId)
          ? <Item key={gameId} id={gameId}/>
          : <SelectedItem key={gameId} id={gameId}/>
      )
    }
    </ListGroup>
  </div>
)

const Item = connect(
  (state, {id}) => ({item: state.api_results.games[id]}),
  (dispatch, {id}) => ({
    addToCart: () => dispatch(addToCart(id))
  })
)(({item, addToCart}) =>
  <ListGroupItem onClick={addToCart}>
    {item.name}
  </ListGroupItem>
)

const SelectedItem = connect(
  (state, {id}) => ({item: state.api_results.games[id]}),
)(({item}) =>
  <ListGroupItem active>
    {item.name}
  </ListGroupItem>
)
