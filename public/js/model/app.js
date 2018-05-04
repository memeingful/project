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
  Image.favorites = [];

  (function checkLocalStorage(){

    if(localStorage.favoriteStored) {

      let favorites = localStorage.getItem('favoriteStored');
      let data = JSON.parse(favorites);
      data.forEach(object => Image.favorites.push(object));
      module.favoritesContainer.render(Image.favorites);

    } else {
      console.log('There is no local storage object ');
    }
  })();

  Image.render = (values) => {
    let image = Handlebars.compile($('#results-template').text());
    return image(values);
  };

  $('#meme-finder').on('submit', function(event) {
    event.preventDefault();
    let userTerm = event.target.imageSearch.value;
    Image.search(userTerm);
  });

  Image.search = (userInput) => {
    $('#choose').empty();
    $.getJSON(ENV.url + '/submit/' + userInput)
      .then(userInput => {
        Image.searchData.length = 0;
        $('.container').hide();
        $('.result-view').show();
        let randomNumArray=[];
        for(let i=0; i<=4; i++) {
          let randomNum = Math.floor(Math.random() * 36);
          if(!randomNumArray.includes(randomNum)){
            randomNumArray.push(Math.floor(randomNum));
            Image.searchData.push(userInput.value[randomNumArray[i]]);
          } else {
            i--;
          }
        }
      }).then(
        $.get(ENV.url+'/quote')
          .then(result => {
            let content = result.contents.quote;
            Image.searchData.map((info,index) => {
              info.quote = content;
              info.id = index;
            });
            Image.searchData.forEach((element) => {
              $('#choose').append(Image.render(element));
            });
            $('#choose').children().on('click', function(){

              Image.favorites.push(Image.searchData[$(this).attr('id').split('_')[1]]);
              let favoriteStored = JSON.stringify(Image.favorites);
              localStorage.setItem('favoriteStored', favoriteStored);
              // window.history.pushState({path: '/favorites'}, 'favorites page', 'favorites');
              location.reload();

            });
          })
      )
      .catch(err => console.error(err));
    $('#imageSearch').val('');
  };

  module.Image = Image;

})(app);
