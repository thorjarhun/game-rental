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
        <Item key={gameId} id={gameId}/>
      )
    }
    </ListGroup>
  </div>
)

const Item = connect(
  (state, {id}) => ({
    item: state.api_results.games[id],
    selected: id in state.user.cart,
    rented: state.user.rented.includes(id+'')
  }),
  { addToCart }
)(({item, selected, rented, addToCart}) =>
  <ListGroupItem active={selected} disabled={rented} {...{
    ...!selected && !rented && {onClick: () => addToCart(item)}
  }}>
    {item.name}
  </ListGroupItem>
)
