'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionUrl = 'https://memeingful.herokuapp.com';
ENV.developmentUrl = 'http://localhost:3000';
ENV.url = ENV.isProduction ? ENV.productionUrl : ENV.developmentUrl;

(function(module){

  const Container = {};

  Container.initHome = function() {
    $('.container').hide();
    $('.search-view').show();
};

  Container.search = callback =>
    $.get(`${ENV.url}/submit`)
      .then(results => console.log(results.value));


  const memesters = [{
    name: 'Eric Singleton Jr.',
    github: '',
    linkedIn: '',
    email= '',
  }, 
  {
    name: 'Autumn Curtis',
    github: '',
    linkedIn: '',
    email= '',
  },
  {
    name: 'Jackie',
    github: '',
    linkedIn: '',
    email= '',
  },
  {
    name: 'David Johnson',
    github: '',
    linkedIn: '',
    email= '',
  },
  {
    name: 'Phillip Kim',
    github: '',
    linkedIn: '',
    email= '',
  }
]

  module.Container = Container;

})(app);

