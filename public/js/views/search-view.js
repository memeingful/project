'use strict';
var app = app || {};

(function(module){

  const searchView = {};

  searchView.view = function() {
    $('.search-view').show();
    $('#meme-finder').on('submit', function(event) {
      event.preventDefault();
      let userInput = event.target.imageSearch.value;
      module.Image.search(userInput);
    });
  };

  module.searchView = searchView;

})(app);