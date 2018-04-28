// @flow
import React from 'react'
import { connect } from 'react-redux'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { addToCart } from '../actions'

export default connect(
  state => ({
    games: state.api_results.termToGames[state.search_term] || [],
    cart: state.user.cart,
    rented: state.user.rented
  })
)(({games, cart, rented}) =>
  <div>
    {!!games.length && <div>Select a game to add to cart</div>}
    <ListGroup>
    {
      games.map(gameId =>
        gameId in cart
          ? <SelectedItem key={gameId} id={gameId}/>
          : rented.includes(gameId+'')
            ? <RentedItem key={gameId} id={gameId}/>
            : <Item key={gameId} id={gameId}/>
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

const ItemConnector = connect((state, {id}) => ({item: state.api_results.games[id]}))

const SelectedItem = ItemConnector(({item}) =>
  <ListGroupItem active>
    {item.name}
  </ListGroupItem>
)

const RentedItem = ItemConnector(({item}) =>
  <ListGroupItem disabled>
    {item.name}
  </ListGroupItem>
)
