'use strict';

var app = app || {};

const ENV = {};


//image obj
//contentUrl
//width
//height
//thumbnailUrl


ENV.isProduction = window.location.protocol === 'https:';
ENV.productionUrl = 'https://memeingful.herokuapp.com';
ENV.developmentUrl = 'http://localhost:3000';
ENV.url = ENV.isProduction ? ENV.productionUrl : ENV.developmentUrl;

(function(module){

  const Image = {};
  let searchData = [];

  Image.render = (values) => {
    let image = Handlebars.compile($('#results-template').text());
    return image(values);
  };

  Image.search = (userInput) => {
    $.getJSON(ENV.url + '/submit/' + userInput)
      // .then(results => console.log(results.value))
      .then(userInput => {
        searchData.length = 0;
        let imageList = userInput.value;
        $('.container').hide();
        $('.result-view').show();
        for(let i=0; i<5; i++) {
          searchData.push(userInput.value[i]);
        }
      }).then(
        $.get(ENV.url+'/quote')
          .then(result => {
            // searchData.push(result.contents);
            let content = result.contents.quote;
            searchData.map(info => {
              info.quote = content;
            })
            searchData.forEach(element => {
              $('#choose').append(Image.render(element));
            });
          })
      )
      .catch(err => console.error(err));
  };

  module.Image = Image;

})(app);
