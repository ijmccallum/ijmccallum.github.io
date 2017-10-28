"use strict";

export default {
    init: function(){
        //https://css-tricks.com/snippets/jquery/smooth-scrolling/
        $('a[href*="#"]:not([href="#"])').on('click tap', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

                if (this.hash == "#zip-lookup") {
                    //set focus to zip input
                    $('#js-zip-input').focus();
                }
                
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 250);
                    return false;
                }
            }
        });
    }
}