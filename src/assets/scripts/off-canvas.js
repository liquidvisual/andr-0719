/*
    OFF-CANVAS.JS - Last updated: 13.02.19, 17.09.18, 16.04.18, 13.12.16

    - Notes:

    * 2019 versions delays window.location to finish animation
    * Latest Nov version fixes major problem with 3rd lvls
    * off-canvas closes when clicking hash tag anchor
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //-----------------------------------------------------------------
    // VARIABLES
    //-----------------------------------------------------------------

    var $html = $('html');
    var $dropdowns = $('.lv-off-canvas .dropdown');
    var $lvPage = $('.lv-page');
    var $lvOffCanvas = $('.lv-off-canvas');
    var $anchor = $('a', $lvOffCanvas);
    var $hashAnchor = $('a[href*="#"]:not([href="#"])', $lvOffCanvas);
    var $submenuTrigger = $('<span class="submenu-trigger"><i class="fa fa-angle-right"></i></span>');

    //-----------------------------------------------------------------
    // HAMBURGER CLICK
    //-----------------------------------------------------------------

    $('[data-menu-toggle]').on('click', function(event){

        event.preventDefault();

        //==================================================
        // OPEN MENU
        //==================================================

        if (!$('.has-open-menu').length) {
            $html.removeClass('has-closed-menu').addClass('has-open-menu');

            //==================================================
            // CLOSE MENU
            // Assign the close to .lv-page container
            // Requires timeout so not to contradict above
            //==================================================

            setTimeout(function(){

                $lvPage.on('click', function(event){
                    event.stopPropagation();

                    if ($('.has-open-menu').length) {
                        $html.removeClass('has-open-menu').addClass('has-closed-menu');
                        $(this).unbind('click');
                    }
                });
            }, 10)
        }
    });

    //-----------------------------------------------------------------
    // HASH ANCHOR CLICK - NEW -
    //-----------------------------------------------------------------

    $hashAnchor.on('click', function(event){
        event.preventDefault();
        event.stopPropagation();
        $html.removeClass('has-open-menu').addClass('has-closed-menu');
        $lvPage.unbind('click');
    });

    //-----------------------------------------------------------------
    // SUBMENU CLICK
    //-----------------------------------------------------------------

    $submenuTrigger.on('click', function(event){
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().next('.dropdown').addClass('is-open');
    });

    //-----------------------------------------------------------------
    // DROPDOWN CLICK (EXIT BACK)
    //-----------------------------------------------------------------

    $dropdowns.on('click', function(event){
        $(this).removeClass('is-open');
        event.stopPropagation();
    });

    //-----------------------------------------------------------------
    // ANCHORS CLICK (smoother experience)
    //-----------------------------------------------------------------

    $anchor.on('click', function(event){
        event.preventDefault();
        var path = $(this).attr('href');
        // $html.removeClass('has-open-menu').addClass('has-closed-menu');

        setTimeout(function() {
            window.location = path;

        }.bind(path), 200);
    });

    //-----------------------------------------------------------------
    // CREATE SUBMENU TRIGGER
    // Not sure why, but this has to come LAST
    //-----------------------------------------------------------------

    $('.lv-off-canvas .has-dropdown > a').append($submenuTrigger);

//--
}(jQuery));

//==================================================
//
//==================================================