'use strict';
var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionUrl = 'https://memeingful.herokuapp.com';
ENV.developmentUrl = 'http://localhost:3000';
ENV.url = ENV.isProduction ? ENV.productionUrl : ENV.developmentUrl;

(function(module){

  const Image = {};

  Image.search = (userInput) => {
    $.getJSON(ENV.url + '/submit/' + userInput)
      // .then(results => console.log(results.value))
      .then(userInput => {
        let imageList = userInput.value;
        $('.container').hide();
        $('.result-view').show();
        for(let i=1; i<imageList.length; i++) {
          $('#choose').append(`<img src='${userInput.value[i].contentUrl}'>`);
        }
      })
      .catch(err => console.error(err));
  };

  module.Image = Image;

})(app);
