import $ from 'jquery'

import './index.css'

import render from './scripts/renderpage'
import api from './scripts/api'
import store from './scripts/store'
import listeners from './scripts/listeners'




function main() {
  api.getBookmarks()
  listeners.bindEventListeners()
  render.renderTopButtonContainer()
  render.render()
}


$(main)
