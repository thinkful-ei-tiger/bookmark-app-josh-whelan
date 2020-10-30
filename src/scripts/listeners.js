import $ from 'jquery'

import render from './renderpage'
import store from './store'
import api from './api'

const listenersError = ``

const handleItemClickExpand = function () {
    $('#container').on('click', '.item', event => {
    let itemIddd = $(event.currentTarget).data()
    let itemId = itemIddd.id
    for (let i=0; i<store.STORE.bookmarks.length;i++){
    if (store.STORE.bookmarks[i].id == itemId){
       if(store.STORE.bookmarks[i].expanded === false) {
           store.STORE.bookmarks[i].expanded = true} 
           else {store.STORE.bookmarks[i].expanded = false}

    }}render.render()
})}

const handleNewBookmarkClicked = function (){
    $('#top-buttons-container').on('click', '#new-button', event => {
        event.preventDefault()
        store.STORE.addItemWindow = 1
        render.render()
        handleCreateNewBookmarkClicked()
})
}

const handleCreateNewBookmarkClicked = function (){
    $('#addItem').on('click','.createButton', function (evt) {
        let title = $('.js-addItemTitle').val()
        let url = $('.js-addItemLink').val()
        let desc = $('.js-description').val()
        let rating = $('.js-filter-button').val()
        //test inputs for errors
        api.postBookmark(title,url,desc,rating)
        store.STORE.addItemWindow = 0
        render.render()
    })
}

const handleDeleteBookmarkClicked = function (){
    $('#container').on('click','.deleteButton', event => {
        let itemIddd = $(event.currentTarget).data()
        let itemId = itemIddd.id
        api.deleteBookmark(itemId)
        render.render()
    })
}

const handleFilterByStars = function (){
    $('#top-buttons-container').on('click', '#filter-button', event => {
        event.preventDefault()
        console.log('filter by stars clicked')
        //get filter value

        //change store filter reference

        //render()
})
}
  
const bindEventListeners = function () {
    handleItemClickExpand()
    handleNewBookmarkClicked()
    handleFilterByStars()
    handleDeleteBookmarkClicked()
  }

  export default {
    bindEventListeners,
    listenersError
  }