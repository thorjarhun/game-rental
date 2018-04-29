// @flow
import React from 'react'
import { Button, Modal, ListGroup, ListGroupItem } from 'react-bootstrap'
import { withStateHandlers } from 'recompose'
import { connect } from 'react-redux'
import { submitRental } from '../actions'

export default withStateHandlers(
  {isOpen: false},
  {
    show: () => () => ({isOpen: true}),
    hide: () => () => ({isOpen: false})
  }
)(({isOpen, show, hide}) =>
  <span>
    <Button onClick={show}>
      Checkout
    </Button>
    <Modal show={isOpen} onHide={hide}>
      <Contents hide={hide}/>
    </Modal>
  </span>
)

const Contents = connect(
  state => ({
    cart: state.user.cart
  }),
  (dispatch, {hide}) => ({
    submit: () => {
      dispatch(submitRental())
      hide()
    }
  })
)(({cart, submit, hide}) =>
  <div>
    <Modal.Header closeButton>
      <Modal.Title>Cart Contents</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ListGroup>
      {
        Object.values(cart).map(game =>
          <ListGroupItem key={game.id}>
            {game.name}
          </ListGroupItem>
        )
      }
      </ListGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button className='pull-left' bsStyle='primary' onClick={submit}>Submit Rental Request</Button>
      <Button onClick={hide}>Close</Button>
    </Modal.Footer>
  </div>
)
