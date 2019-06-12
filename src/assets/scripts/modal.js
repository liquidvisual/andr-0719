/*
    MODAL.JS - Last updated: 05.02.19

    Notes:
        - https://getbootstrap.com/docs/4.1/components/modal/#via-javascript
        - $('.modal-location').on('hidden.bs.modal', function (e) { })
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------

var $locationModal = $('#location-modal');
var $personalInjuryModal = $('#personal-injury-modal');

//-----------------------------------------------------------------
// LAUNCH MODAL
//-----------------------------------------------------------------

function launchModal() {
    var showModal = Boolean(document.querySelector(".theme-show-modal"));
    var state = getLocation();

    // if location exists in localStorage, set it on body
    if (state) {
        setLocation(state);
    }

    // if not, launch modal for user selection - ONLY if page requests modal
    else if (!state && showModal) {
        $locationModal.modal('show');
    }
}

launchModal();

//-----------------------------------------------------------------
// GET LOCATION
//-----------------------------------------------------------------

function getLocation() {
    return localStorage.getItem('location') || null;
}

//-----------------------------------------------------------------
// SET LOCATION
// Both modals can call this function
//-----------------------------------------------------------------

function setLocation(state, condition) {

    if (state == 'qld' && condition == 'confirm') {

        // close modal #1 and prevent exit event from triggering class removal
        // bootstrap doesn't like multiple modals
        $locationModal.modal('hide').on('hidden.bs.modal', function() {
            document.body.classList.add('modal-open'); // force this addition
        });

        // open modal #2
        $personalInjuryModal.modal('show');

    } else {

        // store location string on the body
        document.body.dataset.location = state;

        // store location in localStorage
        localStorage.setItem('location', state);

        // close modal #1 and #2
        $personalInjuryModal.modal('hide');

        // make sure removal has timed release of modal-open class
        $locationModal.modal('hide').on('hidden.bs.modal', function() {
            document.body.classList.remove('modal-open'); // force this removal
        });
    }
}

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================