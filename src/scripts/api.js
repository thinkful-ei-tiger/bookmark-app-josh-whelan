
import store from './store'

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joshua/bookmarks'

function getBookmarks (){
    return fetch(`${BASE_URL}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
      .then(response => response.json())
      .then(data => {console.log(data)})
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
      .catch(error => {console.log('API Request Error: Could not post bookmark')})
  }



export default {
    getBookmarks,
    postBookmark

}