'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search';
ENV.developmentApiUrl = 'http://localhost:3000';
// ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;
ENV.apiUrl = ENV.developmentApiUrl;

(function(module){

  const Container = {};

  Container.search = callback =>
    $.get(`${ENV.apiUrl}/submit`)
      .then(results => console.log(results.value));

  module.Container = Container;

})(app);


page('/submit', app.Container.search);
page.start();