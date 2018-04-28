'use strict';
var app = app || {};

page('/*', (ctx, next) => {
  $('.container').hide();
  next();
});


page('/', app.Container.initHome);
page('/submit', app.Container.search);
page('/about', app.aboutContainer.view);
page.start();