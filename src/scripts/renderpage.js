import $ from 'jquery'

import store from './store'
import api from './api'
import listeners from './listeners'

const renderTopButtonContainer = function (){
    $('#top-buttons-container').html(
        `<form id="new-button" class="button">
        <button type="submit">New Bookmark</button>
      </form>
  
      <form id="filter-button" class="button">
        <label for="filter-button">Filter by stars:</label>
          <select name="filter by" class="js-filter-by" size="1">
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5</option>
          </select>
      </form>`
    )
}

const renderAddItemContainer = function (){
if(store.STORE.addItemWindow === 1){
$('#addItem').html(
    `<form>
    <label for="linkTitle">Link:</label>
    <input type="text" name="linkTitle" class="js-addItemLink" placeholder="https://www.website-that-i-like-7893024.com" required pattern="https://.*|http://.*">
    <br>
    <label for="bookmarkTitle">Title of Bookmark:</label>
    <input type="text" name="bookmarkTitle" class="js-addItemTitle" placeholder="My Favorite Website">
    <br>
    <label for="filter-button">Level of Importance:</label>
      <select name="filter-button" class="js-filter-button" size="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    <label for="description">Description(optional):</label>
    <textarea name="description" class="js-description"></textarea>
    <button class="createButton" onclick="" style="cursor: pointer;">Create New Bookmark</button>
    </form>`
)} else{$('#addItem').empty()}
}

const renderErrorMessage = function (inp){
    $('#errorMessageContainer').html(`
        ${inp}<br>
    `)
}

const deleteErrorMessage = function (){
    $('#errorMessageContainer').empty()
}

const renderMainContainer = function (){
    let mainRet = ``
    for (let i=0;i<store.STORE.bookmarks.length;i++){
        if (store.STORE.bookmarks[i].rating >= store.STORE.filterBy){
        mainRet += createMainContainerItem(store.STORE.bookmarks[i])}
    }
    $('#container').html(mainRet)
}

const createMainContainerItem = function(obj){
    let retu = ``
    if (obj.expanded === false){
    retu = `<div class="item" onclick="" style="cursor: pointer;" data-id="${obj.id}">
        <p>${obj.title}</p>
        <div class="imgHolder">
          ${createStarsForItems(parseInt(obj.rating))}
        </div>
      </div>`} else { retu =
        `<div class="item" onclick="" style="cursor: pointer;" data-id="${obj.id}">
        <p>${obj.title}</p>
        <div class="imgHolder">
          ${createStarsForItems(parseInt(obj.rating))}
        </div>
      </div>
      <div class="expanded">
        <a href=${obj.url} target="_blank"><div class="visitButton" >Visit Site</div></a>
        <p>${obj.desc}</p>
        <div class="deleteButton" onclick="" style="cursor: pointer;" data-id="${obj.id}">Delete Bookmark</div>
      </div>`
    }
    return retu
}

const createStarsForItems = function (number){
    let ret = ``
    for (let i=number;i>0;i--){
        ret += `<img src="src/img/star.png" width="20px" alt="star"/>`
    }
    return ret
}

const render = function(){
    api.getBookmarks()
    renderMainContainer()
    renderAddItemContainer()
}

const renderMinus = function(){
    renderMainContainer()
    renderAddItemContainer()
}

const renderShell = function(){
    $('#root').html(
      `<section id="top-buttons-container">
      </section>
  
      <div id="addItem">
      </div>
  
      <section id="errorMessageContainer">
      </section>
  
      <section id="container">
      </section>`
  )
}


export default {
    renderShell,
    renderTopButtonContainer,
    render,
    renderErrorMessage,
    deleteErrorMessage,
    renderMinus
  }