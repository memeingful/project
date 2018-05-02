'use strict';

var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionUrl = 'https://memeingful.herokuapp.com';
ENV.developmentUrl = 'http://localhost:3000';
ENV.url = ENV.isProduction ? ENV.productionUrl : ENV.developmentUrl;

(function(module){

  const Image = {};
  Image.searchData = [];

  Image.render = (values) => {
    let image = Handlebars.compile($('#results-template').text());
    return image(values);
  };

  $('#meme-finder').on('submit', function(event) {
    event.preventDefault();
    let userTerm = event.target.imageSearch.value;
    module.Image.search(userTerm);
  });

  Image.search = (userInput) => {
    $('#choose').empty();
    $.getJSON(ENV.url + '/submit/' + userInput)
      .then(userInput => {
        Image.searchData.length = 0;
        $('.container').hide();
        $('.result-view').show();
        for(let i=0; i<5; i++) {
          Image.searchData.push(userInput.value[i]);
        }
      }).then(
        $.get(ENV.url+'/quote')
          .then(result => {
            let content = result.contents.quote;
            Image.searchData.map(info => {
              info.quote = content;
            });
            Image.searchData.forEach(element => {
              $('#choose').append(Image.render(element));
            });
          })
      )
      .catch(err => console.error(err));
    $('#imageSearch').val('');
  };

  module.Image = Image;

})(app);
