// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Grid, Jumbotron, Button } from 'react-bootstrap'
import { setApiKey, setSearchTerm, reset, emptyCart } from '../actions'
import GameList from './gameList'
import Checkout from './checkout'

export default connect(
  state => state,
  { setApiKey, setSearchTerm, reset, emptyCart }
)(({api_key, search_term, user, setApiKey, setSearchTerm, reset, emptyCart}) =>
  <div>
    <Jumbotron>
      <Grid>
        <h1>Game Rental App</h1>
      </Grid>
    </Jumbotron>
    <div>
      API Key: <input value={api_key} onChange={e => setApiKey(e.target.value)}/>
      <Button onClick={reset}>Reset All (Except API Key)</Button>
    </div>
    <div>
      <input placeholder='Game Title' value={search_term} onChange={e => setSearchTerm(e.target.value)}/>
    </div>
    {
      !!Object.keys(user.cart).length &&
      <div>
        <Checkout/>
        <Button onClick={emptyCart}>Reset Cart</Button>
      </div>
    }
    <GameList/>
  </div>
)
