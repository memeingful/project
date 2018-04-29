'use strict';

var app = app || {};

(function(module){

  const searchView = {};

  searchView.initHome = function() {
    $('.search-view').show();
    $('#meme-finder').on('submit', function(event) {
      event.preventDefault();
      let userInput = event.target.imageSearch.value;
      console.log(userInput);
      module.Image.search(userInput);
    });
  };

  module.searchView = searchView;

})(app);