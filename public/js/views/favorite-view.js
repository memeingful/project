'use strict';
var app = app || {};

(function(module){

  const favoritesContainer = {};
  const template = Handlebars.compile($('#favorites-template').text());

  favoritesContainer.view = () => {
    $('.container').hide();
    $('.favorite-view').show();  
  };

  favoritesContainer.render = (array) => {
    array.forEach(element => {
      $('.favorite-view').find('#choose').append(template(element));
    });
  };

  module.favoritesContainer = favoritesContainer;

})(app);