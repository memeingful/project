'use strict';

// function startup() {
//     var el = document.getElementsByTagName("")[0];
//     el.addEventListener("touchstart", handleStart, false);
//     el.addEventListener("touchend", handleEnd, false);
//     el.addEventListener("touchcancel", handleCancel, false);
//     el.addEventListener("touchmove", handleMove, false);
//     log("initialized.");
//   }

//   startup();

$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});