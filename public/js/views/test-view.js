'use strict';

var app = app || {};
(function(module){
  const test = {};
  test.initView = () => {
    app.image.array.forEach(image => $('#test').append());
  };
});