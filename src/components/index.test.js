// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './index'
import configureStore from '../configureStore'

const store = configureStore()

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
