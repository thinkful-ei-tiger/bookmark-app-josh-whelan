import $ from 'jquery'
import store from './store'
import render from "./renderpage"

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joshua/bookmarks'

const getBookmarks = function (){
    return fetch(`${BASE_URL}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
      .then(response => response.json())
      .then(data => {

        store.STORE.bookmarks = []
         store.populateStore(data) 

        /*  let bookmarks = data.map(bookmark => ({
              ...bookmark,expanded:0
          })
            )
          store.STORE.bookmarks = bookmarks */

          console.log("get bookmarks done")
        }).then(render.renderMinus())
      .catch(error => {render.renderErrorMessage('API Request Error: Could not get bookmarks')})
      render.renderMinus()
  }

  const postBookmark = function (tit,uurrll,description,rateing){

      let params = {title: `${tit}`,
      url: `${uurrll}`,
      desc: `${description}`,
      rating: `${rateing}`}

    fetch(`${BASE_URL}`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
      .then(response => response.json())
      .then(data => {console.log(data)})
      .catch(error => {render.renderErrorMessage('API Request Error: Could not post bookmark')})
      render.render()
  }

  const deleteBookmark = function (id){

  fetch(`${BASE_URL}/${id}`,{
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data => {console.log(data)})
    .catch(error => {render.renderErrorMessage('API Request Error: Could not delete bookmark')})
    render.render()
}

export default {
    getBookmarks,
    postBookmark,
    deleteBookmark,
}