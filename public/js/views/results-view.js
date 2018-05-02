'use strict';
var app = app || {};

(function(module){

  const resultsContainer = {};

  resultsContainer.view = () => {
    $('.container').hide();
    $('.result-view').show();
    $.get(`${ENV.url}/submit/:term`)
      .then(results => {
        var imageList = results.value;
        for(let i=0; i <imageList.length; i++){
          $('#choose').append(`<img src=${results.value[i].contentUrl}>`);
        }
      });
  };

  module.resultsContainer = resultsContainer;

})(app);