import $ from 'jquery'

import './index.css'

import render from './scripts/renderpage'
import api from './scripts/api'
import store from './scripts/store'
import listeners from './scripts/listeners'




function main() {
  console.log("main function starting")
  api.getBookmarks()
  listeners.bindEventListeners()
  render.renderTopButtonContainer()
  render.render()
  console.log('Main function is done running')
}


$(main)
