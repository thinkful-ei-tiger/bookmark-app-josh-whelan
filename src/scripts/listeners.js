import $ from 'jquery'

import render from './renderpage'
import store from './store'

const handleItemClickExpand = function () {
    $('.container').on('click', '.item', event => {
      event.preventDefault();
      console.log(`item expand got clicked`)
      //const id = getItemIdFromElement(event.currentTarget);
    //  const itemName = $(event.currentTarget).find('.shopping-item').val();
    //  render();
    });
  };

const handleNewBookmarkClicked = function (){
    $('#top-buttons-container').on('click', '#new-button', event => {
        event.preventDefault()
        console.log('new button clicked')
           //open add bookmark section
        handleCreateNewBookmarkClicked()
})
}

const handleCreateNewBookmarkClicked = function (){
    $('.addItem').on('click','.createButton', event => {
        console.log('create new bookmark clicked')
        //add new item based on inputs
        //hide the add section
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