/*
    MAIN.JS - Last updated: 19.06.19
*/
//-----------------------------------------------------------------
// ON READY
//-----------------------------------------------------------------

$(function () {

    // Parallax
    $.Scrollax();

    // Tooltips
    // $('[data-toggle="tooltip"]').tooltip();

    // Flatpickr
    // $('.datepicker').flatpickr({
    //         format: "Y-m-d", // 2018-12-18
    //         altFormat: "d M Y", // 06 Dec 2018 etc
    //         altInput: true
    //     }
    // );
});

//-----------------------------------------------------------------
// WOW.JS - scroll reveal tackiness
//-----------------------------------------------------------------

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

//-----------------------------------------------------------------
// BOLD HEADINGS
//-----------------------------------------------------------------

var headings = document.querySelectorAll('.display-1:not(.is-unique), h2.text-uppercase:not(.is-unique)');

headings.forEach(function(item) {
    boldSecondWord(item);
});

function boldSecondWord(el) {
    var wordArr = el.textContent.trim().split(' ');
    var firstWord = wordArr[0];
    var trailingWords = wordArr.slice(1).join(' ');

    // el.style.color = 'orange';
    el.innerHTML = firstWord + ' <span class="font-weight-normal">'+trailingWords+'</span>';
}

//-----------------------------------------------------------------
// EQUAL HEIGHT
//-----------------------------------------------------------------

$('[data-equal-height]').matchHeight(
 {
     byRow: false,
     property: 'height',
     target: null,
     remove: false,
     mq: "(min-width: 768px)"
 });

//-----------------------------------------------------------------
// SITEMAP TRIGGER - 2019
//-----------------------------------------------------------------

$('[data-sitemap-trigger]').on('click', function(event){
    $('.fa', $(this)).toggleClass('fa-angle-down');
    $('[data-sitemap]').toggleClass('is-collapsed');
});

//-----------------------------------------------------------------
// SCROLL-TO (NEW) - 2019
// Exclude empty links, sitemap and tabs
//-----------------------------------------------------------------

$('a[href*="#"]:not([href="#"], [data-toggle="tab"])')
    .on('click', function() {
        var id = $(this).attr('href');
        var endPos = $(id);
        var headerHeight = $('.global-header').height();

        if (endPos.length) {
            $.scrollTo(endPos.offset().top - headerHeight, 800);
            return false; // don't show hash link in url
        }
    }
);

//-----------------------------------------------------------------
// SCROLL TOP
//-----------------------------------------------------------------

$('[data-back-top]').click(function() {
    $.scrollTo(0, 500);
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================