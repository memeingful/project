'use strict';
var app = app || {};

(function(module){

  const aboutContainer = {};

  aboutContainer.view = () => {
    $('.container').hide();
    $('.about-view').show();
  };

  $('.about-view').find('.target').on('click', function(e) {

    $('.bio').hide();
    $(`.ranger_${e.target.id.split('_')[1]}`).show();

  });
  module.aboutContainer = aboutContainer;

})(app);