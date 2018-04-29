// @flow
import React from 'react'
import { connect } from 'react-redux'
import { Grid, Jumbotron, Button, FormControl } from 'react-bootstrap'
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
    <Grid>
    {
      api_key
        ? <Body/>
        : <FormControl
            autoFocus
            placeholder='API Key'
            onChange={e => e.target.value.length === 40 && setApiKey(e.target.value)}
          />
    }
    </Grid>
  </div>
)

const Body = connect(
  state => state,
  { setSearchTerm, reset, emptyCart }
)(({search_term, user, setSearchTerm, reset, emptyCart}) =>
  <div>
    <input placeholder='Game Title' autoFocus value={search_term} onChange={e => setSearchTerm(e.target.value)}/>
    {
      !!Object.keys(user.cart).length &&
      <span className='pull-right'>
        <Checkout/>
        <Button onClick={emptyCart}>Reset Cart</Button>
      </span>
    }
    <GameList/>
    <Button bsSize='xsmall' onClick={reset}>Reset All</Button>
  </div>
)
