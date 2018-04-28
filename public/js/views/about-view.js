'use strict';
var app = app || {};

(function(module){

  const aboutContainer = {};

  aboutContainer.view = () => {
    $('.container').hide();
    $('.about-view').show();
  };

  module.aboutContainer = aboutContainer;

})(app);