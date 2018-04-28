// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Grid, Jumbotron, Button } from 'react-bootstrap'
import { setApiKey, setSearchTerm, reset, emptyCart } from '../actions'
import GameList from './gameList'
import Checkout from './checkout'

export default connect(
  state => state,
  { setApiKey }
)(({api_key, setApiKey}) =>
  <div>
    <Jumbotron>
      <Grid>
        <h1>Game Rental App</h1>
      </Grid>
    </Jumbotron>
    {
      api_key
       ? <Body/>
       : <span>API Key: <input autoFocus onBlur={e => setApiKey(e.target.value)}/></span>
    }
  </div>
)

const Body = connect(
  state => state,
  { setSearchTerm, reset, emptyCart }
)(({search_term, user, setSearchTerm, reset, emptyCart}) =>
  <div>
    <div>
      <input placeholder='Game Title' autoFocus value={search_term} onChange={e => setSearchTerm(e.target.value)}/>
    </div>
    {
      !!Object.keys(user.cart).length &&
      <div>
        <Checkout/>
        <Button onClick={emptyCart}>Reset Cart</Button>
      </div>
    }
    <GameList/>
    <div>
      <Button bsSize='xsmall' onClick={reset}>Reset All</Button>
    </div>
  </div>
)
