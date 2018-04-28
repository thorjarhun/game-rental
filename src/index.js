// @flow
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components'
import configureStore from './configureStore'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
