import $ from 'jquery'
import store from './store'
import render from "./renderpage"

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joshua/bookmarks'

function getBookmarks (){
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

       /*   let bookmarks = data.map(bookmark => ({
              ...bookmark,expanded:0
          })
            )
          store.STORE.bookmarks = bookmarks */

          render.render()
        })
      .catch(error => {console.log('API Request Error: Could not get bookmarks')})
  }

  function postBookmark (tit,uurrll,description,rateing){

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
      .then(render.render())
      .catch(error => {console.log('API Request Error: Could not post bookmark')})
  }



export default {
    getBookmarks,
    postBookmark

}