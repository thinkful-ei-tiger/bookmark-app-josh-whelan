import $ from 'jquery'

const handleItemClickExpand = function () {
    $('.container').on('click', '.item', event => {
      event.preventDefault();
      console.log(`it got clicked`)
      //const id = getItemIdFromElement(event.currentTarget);
    //  const itemName = $(event.currentTarget).find('.shopping-item').val();
    //  render();
    });
  };
  


  const bindEventListeners = function () {
    handleItemClickExpand()
  }


  export default {
    bindEventListeners,

  }
  