'use strict';
var app = app || {};

(function(module){

  const searchView = {};

  searchView.view = function() {
    $('.container').hide();
    $('.search-view').show();
  };

  module.searchView = searchView;

})(app);