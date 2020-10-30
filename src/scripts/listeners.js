import $ from 'jquery'

import render from './renderpage'
import store from './store'
import api from './api'

const handleItemClickExpand = function () {
    $('#container').on('click', '.item', event => {
      event.preventDefault();
      console.log(`item expand got clicked`)
     
   // $(event.currentTarget).data-id
    //  const itemName = $(event.currentTarget).find('.shopping-item').val();
    for (let i=0; i<store.STORE.bookmarks.length;i++){
    if (store.STORE.bookmarks[i].title == "addicting games"){
        if (store.STORE.bookmarks[i].expanded === 0){
            store.STORE.bookmarks[i].expanded = 1
        } else {
            store.STORE.bookmarks[i].expanded = 0
        }
    }}
        render.render()
    })
  }

const handleNewBookmarkClicked = function (){
    $('#top-buttons-container').on('click', '#new-button', event => {
        console.log('something')
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
        $('#addItem').empty()
        store.STORE.addItemWindow = 0
        //render()
    })
}

const handleDeleteBookmarkClicked = function (){
    $('.container').on('click','.deleteButton', event => {
        console.log('delete bookmark clicked')
        //delete item based on inputs
        //render()
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
    bindEventListeners
  }