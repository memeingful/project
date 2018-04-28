'use strict';
var app = app || {};

(function(module){

  const resultsContainer = {};

  resultsContainer.view = () => {
    $('.container').hide();
    $('.result-view').show();
  };

  module.resultsContainer = resultsContainer;

})(app);