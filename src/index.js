import $ from 'jquery'

import 'normalize.css'
import './index.css'

import render from './scripts/renderpage'
import api from './scripts/api'
import store from './scripts/store'
import listeners from './scripts/listeners'




function main() {
  render.render().then(
  render.renderTopButtonContainer()).then(
  listeners.bindEventListeners()).then(

  console.log(store.STORE.bookmarks)).then(
  console.log('Main function is done running'))
}


$(main)
