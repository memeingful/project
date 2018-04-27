'use strict';

var app = app || {};
const ENV = {};
ENV.isProduction = window.location.protocol === 'https:';
ENV.productionApiUrl = 'https://memeingful.herokuapp.com/';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionApiUrl : ENV.developmentApiUrl;

(function (module) {
    const image = {};
    function errorCallBack(err) {
        console.error(err);
    }
    // function Image(rawImageObject) {
    //     Object.keys(rawImageObject).forEach(key => this[key] = rawImageObject[key]);
    // }

// Image.all = [];
// Image.loadAll = rows => {
//     Image.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));
//   };

  
image.fetchAll = callback =>
    $.get(`/bing/v7.0/images/search`)
      .then(results => {
          image.array = results
        // image.loadAll(books);
      })
      .then(callback)
      .catch(errorCallback);




})(app);







