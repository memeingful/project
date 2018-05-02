'use strict';
var app = app || {};

(function(module){

  const favoritesContainer = {};

  favoritesContainer.view = () => {
    $('.container').hide();
    $('.favorite-view').show();
    
  };

  module.favoritesContainer = favoritesContainer;

})(app);