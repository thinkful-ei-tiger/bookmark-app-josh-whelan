import $ from 'jquery'

import 'normalize.css'
import './index.css'

import listeners from './scripts/listeners'
import api from './scripts/api'
import store from './scripts/store'
import render from './scripts/renderpage'

function main() {
  render.renderTopButtonContainer()
  store.createStore()
  render.render()
  listeners.bindEventListeners()

  console.log(store.STORE.bookmarks)
  console.log('Page is rendered')
}


$(main)
