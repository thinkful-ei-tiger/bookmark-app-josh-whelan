import $ from 'jquery'

import api from './api'

const STORE = {
  bookmarks:[],
  addItemWindow:0,
  filterBy:1
}

/* const populateStore = function (arr){
  for(let i=0;i<arr.length;i++){
      let pushmark = {}
      pushmark.id = `${arr[i].id}`
      pushmark.title = `${arr[i].title}`
      pushmark.url = `${arr[i].url}`
      pushmark.expanded = 0
      pushmark.rating = `${arr[i].rating}`
      pushmark.desc = `${arr[i].desc}`
      STORE.bookmarks.push(pushmark)
  }} */


export default {
    STORE,
    //populateStore
  }