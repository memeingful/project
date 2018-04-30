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
    console.log(userInput, ENV.url + '/submit/' + userInput);
    return $.getJSON(ENV.url + '/submit/' + userInput)
      .then(results => console.log(results.value))
      .catch(err => console.error(err));
  };

  module.Image = Image;

})(app);