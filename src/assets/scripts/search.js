/*
    SEARCH.JS - Last updated: 09.07.17
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// SEARCH TRIGGER
//-----------------------------------------------------------------

$('[data-search-trigger]').click(function(event) {
    $('[data-global-search]').addClass('active');
    $('[data-global-search] input').focus();
    return false;
});

//==============================================
// CLICK CLOSE
//==============================================

$('[data-global-search]').on('mousedown', function() {
    closeSearch();
});

$('[data-global-search] input').on('mousedown', function(e) {
    e.stopPropagation();
})

//==============================================
// CLOSE ON ESC
//==============================================

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        closeSearch();
    }
});

//==============================================
// CLOSE
//==============================================

function closeSearch() {
    $('[data-global-search]').removeClass('active');
    document.activeElement.blur(); // automatically close the keyboard on iOS
}

//==================================================
//
//==================================================
//-----------------------------------------------------------------
//
//-----------------------------------------------------------------