import $ from 'jquery'

import './index.css'

import render from './scripts/renderpage'
import api from './scripts/api'
import store from './scripts/store'
import listeners from './scripts/listeners'




function main() {
  render.renderShell()
  listeners.bindEventListeners()
  api.getBookmarks()
  render.renderTopButtonContainer()
  render.render()
}


$(main)
