'use strict';
var app = app || {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionUrl = 'https://memeingful.herokuapp.com';
ENV.developmentUrl = 'http://localhost:3000';
ENV.url = ENV.isProduction ? ENV.productionUrl : ENV.developmentUrl;

(function(module){

  const Image = {};

  Image.render = (values) => {
    let image = Handlebars.compile($('#results-template').text());
    return image(values);
  }

  Image.search = (userInput) => {
    $.getJSON(ENV.url + '/submit/' + userInput)
      // .then(results => console.log(results.value))
      // lastThree = [];

      // var renderImages = function() {
      //   var imageContainer = document.getElementById('imageContainer');
      //   imageContainer.innerHTML = '';
      //   var currentThree = [];
      //   for (var i = 0; i < 3; i++) {
      //     var randomProduct = productNum[randomNum()];
      //     if (currentThree.includes(randomProduct) || lastThree.includes(randomProduct)){
      //       i--;
      //     } else {
      //       currentThree.push(randomProduct);
      //       randomProduct.imageMaker();
      //       console.log(currentThree);
      //     }
      //   }
      //   lastThree = currentThree;
      // };
      .then(userInput => {
        let imageList = userInput.value;
        $('.container').hide();
        $('.result-view').show();
        let randomNumArray=[];
        for(let j=0; j<=4; j++) {
          let randomNum = Math.floor(Math.random() * 36);
          if(!randomNumArray.includes(randomNum)){
            randomNumArray.push(Math.floor(randomNum));
            $('#choose').append(Image.render(userInput.value[randomNumArray[j]]));
            console.log(userInput.value[randomNumArray[j]]);
          } else {
            j--;
          }
          console.log(randomNumArray[j]);
        }
      })
      .catch(err => console.error(err));
  };

  module.Image = Image;

})(app);