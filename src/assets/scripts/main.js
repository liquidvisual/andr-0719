/*
    MAIN.JS - Last updated: 21.01.19
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------

var headroom = null;
var lvPage = document.querySelector(".lv-page");
var resizeTimer;

//-----------------------------------------------------------------
// ON READY
//-----------------------------------------------------------------

$(function () {

    // Remove page loader by adding loaded to html
    document.documentElement.classList.add('has-loaded');

    // Headroom
    initHeadroom();

    // onResize
    $(window).on('resize', onResize);

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
// SCROLL TO
// Exclude empty links, sitemap and tabs
//-----------------------------------------------------------------

$('a[href*="#"]:not([href="#"], [href="#sitemap"], [data-toggle="tab"])').click(function() {
    var id = $(this).attr('href');
    var endPos = $(id);
    var headerHeight = $('.global-header').height();

    if (endPos.length) {
        $.scrollTo(endPos.offset().top - headerHeight, 500);
        // return false;
    }
});

//-----------------------------------------------------------------
// SCROLL TOP
//-----------------------------------------------------------------

$('[data-back-top]').click(function() {
    $.scrollTo(0, 500);
});

//-----------------------------------------------------------------
// HEADROOM.js
//-----------------------------------------------------------------

function initHeadroom() {

    var headroomOptions = {
        // vertical offset in px before element is first unpinned
        offset : 0,
        // scroll tolerance in px before state changes
        tolerance : 0,
        // or you can specify tolerance individually for up/down scroll
        tolerance : {
            up : 5,
            down : 0
        },
        // css classes to apply
        classes : {
            // when element is initialised
            initial : "headroom",
            // when scrolling up
            pinned : "headroom--pinned",
            // when scrolling down
            unpinned : "headroom--unpinned",
            // when above offset
            top : "headroom--top",
            // when below offset
            notTop : "headroom--not-top",
            // when at bottom of scoll area
            bottom : "headroom--bottom",
            // when not at bottom of scroll area
            notBottom : "headroom--not-bottom"
        },
        // element to listen to scroll events on, defaults to `window`
        // scroller : someElement,
        // callback when pinned, `this` is headroom object
        onPin : function() {},
        // callback when unpinned, `this` is headroom object
        onUnpin : function() {},
        // callback when above offset, `this` is headroom object
        onTop : function() {},
        // callback when below offset, `this` is headroom object
        onNotTop : function() {},
        // callback when at bottom of page, `this` is headroom object
        onBottom : function() {},
        // callback when moving away from bottom of page, `this` is headroom object
        onNotBottom : function() {}
    };

    // Init only if no headroom and return
    if (!headroom) {
        headroom = new Headroom(lvPage, headroomOptions);
        setHeadroomOffset(); // here?
        headroom.init();
        return;
    }
}

//-----------------------------------------------------------------
// SET HEADROOM OFFSET
// 1050px is where the header is fixed by default
// Mobile and tablet, the header is dynamic with scroll
//-----------------------------------------------------------------

function setHeadroomOffset() {
    headroom.offset = 60;
    if ($(window).width() >= 768) headroom.offset = 280;
    if ($(window).width() >= 992) headroom.offset = 374;
}

//-----------------------------------------------------------------
// ON RESIZE
// Adjust Headroom offset upon resize
//-----------------------------------------------------------------

function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){
        if (headroom) setHeadroomOffset();
    }, 250);
}

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================