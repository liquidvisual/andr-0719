/*
    SEARCH.JS - Last updated: 21.03.19
*/
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

;(function(){
    'use strict';

    //-----------------------------------------------------------------
    // VARIABLES
    //-----------------------------------------------------------------

    var globalSearch = document.querySelector('body > [data-global-search]');
    var globalSearchInput = globalSearch.querySelector('input');
    var globalSearchTriggers = document.querySelectorAll('[data-search-trigger]');

    //-----------------------------------------------------------------
    // IE11
    // https://github.com/miguelcobain/ember-paper/issues/1058
    // missing forEach on NodeList for IE11
    //-----------------------------------------------------------------

    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }

    //-----------------------------------------------------------------
    // SEARCH TRIGGERS CLICK
    //-----------------------------------------------------------------

    globalSearchTriggers.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            globalSearch.classList.add('active');
            globalSearch.querySelector('input').focus();
        })
    });

    //-----------------------------------------------------------------
    // CLICK CLOSE
    //-----------------------------------------------------------------

    globalSearch.addEventListener('mousedown', closeSearch);

    // prevent input click from closing
    globalSearchInput.addEventListener('mousedown', function(event) {
        event.stopPropagation();
    })

    //-----------------------------------------------------------------
    // CLOSE ON ESC
    //-----------------------------------------------------------------

    document.addEventListener('keyup', function(event) {
        if (event.keyCode === 27) {
            closeSearch();
        }
    })

    //-----------------------------------------------------------------
    // CLOSE
    //-----------------------------------------------------------------

    function closeSearch() {

        globalSearch.classList.remove('active');

        // automatically close the keyboard on iOS
        document.activeElement.blur();
    }

    //==============================================
    //
    //==============================================
//--
})();