import $ from 'jquery'

import 'normalize.css'
import './index.css'
import listeners from './scripts/listeners'

function main() {
  console.log('DOM is loaded')
  listeners.bindEventListeners()
}


$(main)
