'use strict';
var app = app || {};

page('/*', (ctx, next) => {
  $('.container').hide();
  next();
});

page('/', app.searchView.view);
page('/favorites', app.favoritesContainer.view);
page('/about', app.aboutContainer.view);
page.start();