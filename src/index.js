import $ from 'jquery'

import 'normalize.css'
import './index.css'

import listeners from './scripts/listeners'
import api from './scripts/api'
import store from './scripts/store'
import render from './scripts/renderpage'

function main() {
  render.renderTopButtonContainer()
  render.render()

  listeners.bindEventListeners()

  console.log('Page is rendered')
}


$(main)
