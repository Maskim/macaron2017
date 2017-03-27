/** script */

// import from a lib
var lib = require('./lib/lib');

// or from another module
// var toto2 = require('./toto2')

// or directly import from node_modules
// var _ = require('underscore');


// Use jQuery
var $ = require('jquery');

// expose jQuery as global
// for console, external script on inline js if needed
window.$ = $;
window.jQuery = $;

var onScroll = false;

function scrollToElement( $element ) {
    if ( onScroll ) { return; } //Prevent multi call at the same time
    onScroll = true;

    var dest;
    if ( $element.offset().top > $( document ).height() - $( window ).height() ) {
        dest = $( document ).height() - $( window ).height();
    } else {
        dest = $element.offset().top;
    }

    //go to destination
    $( 'html,body' ).animate({
        scrollTop: dest
    }, 800, 'swing', function () {
        onScroll = false;
    });
}

$(document).ready(function() {
    $('.top-bar a').on('click', function() {
        var $target = $($(this).attr('href'));

        if($target.length > 0) {
            scrollToElement( $target );
        }
    });
});

