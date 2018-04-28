'use strict';
var app = app || {};

page('/*', (ctx, next) => {
  $('.container').hide();
  next();
});


page.start();