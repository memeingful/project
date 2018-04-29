'use strict';
var app = app || {};

page('/*', (ctx, next) => {
  $('.container').hide();
  next();
});


page('/', app.searchView.initHome);
page('/about', app.aboutContainer.view);
page.start();