'use strict';
var app = app || {};

page('/*', (ctx, next) => {
  $('.container').hide();
  next();
});


page('/', app.searchView.view);
page('/results', app.resultsContainer.view);
page('/about', app.aboutContainer.view);
page.start();