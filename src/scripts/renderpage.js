import $ from 'jquery'



const renderTopButtonContainer = function (){
    $('#top-buttons-container').html(
        `<form id="new-button" class="button">
        <button type="submit">New Bookmark</button>
      </form>
  
      <form id="filter-button" class="button">
        <label for="filter-button">Filter by stars:</label>
          <select name="filter by" size="1">
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
//if new bookmark was clicked, then 
$('.addItem').html(
    `<label for="linkTitle">Link:</label>
    <input type="text" name="linkTitle" class="js-addItemLink" placeholder="www.fake-website-7893024.com">
    <label for="bookmarkTitle">Title of Bookmark:</label>
    <input type="text" name="bookmarkTitle" class="js-addItemTitle" placeholder="Fake Website">
    <label for="filter-button">Level of Importance:</label>
      <select name="filter-button" size="1">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    <label for="description">Description(optional):</label>
    <textarea class="description"></textarea>
    <div class="createButton" onclick="" style="cursor: pointer;">Create New Bookmark</div>`
)
}

const renderErrorMessage = function (){
    $('#errorMessageContainer').html(
        ``
    )
}

const renderMainContainer = function (){
    $('.container').html(
        `<div class="item" onclick="" style="cursor: pointer;">
        <p>Title of Link</p>
        <div class="imgHolder">
          <img src="src/img/star.png" width="20px" alt="star"/>
        </div>
      </div>
      <div class="item" onclick="" style="cursor: pointer;">
        <p>Title of Link</p>
        <div class="imgHolder">
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
        </div>
      </div>
      <div class="item" onclick="" style="cursor: pointer;">
        <p>Title of Link</p>
        <div class="imgHolder">
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
        </div>
      </div>
      <div class="item" onclick="" style="cursor: pointer;">
        <p>Title of Link</p>
        <div class="imgHolder">
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
        </div>
      </div>
      <div class="item" onclick="" style="cursor: pointer;">
        <p>Title of Link</p>
        <div class="imgHolder">
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
        </div>
      </div>
      <div class="item" onclick="" style="cursor: pointer;">
        <p>Title of Link</p>
        <div class="imgHolder">
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
          <img src="src/img/star.png" width="20px" alt="star"/>
        </div>
      </div>
      <div class="expanded">
        <a href="https:/www.google.com" target="_blank"><div class="visitButton" >Visit Site</div></a>
        <p>Description of the bookmarks will go here, here users can put a description about hoe they want thier item to be here</p>
        <div class="deleteButton" onclick="" style="cursor: pointer;">Delete Bookmark</div>
      </div>`
    )
}

const render = function(){
    renderAddItemContainer()
    renderErrorMessage()
    renderMainContainer()
}


export default {
    renderTopButtonContainer,
    render
  }