(function() {
    var popups = document.getElementsByClassName('popup-image');

    //TODO: Add keypress event listener to close popups on Esc

    for (var i = 0; i < popups.length; ++i) {
        popups[i].addEventListener('click', togglePopup, false);
    }

    function togglePopup(event) {
        if (document.body.scrollWidth > 490) {
            event.target.parentNode.classList.toggle('popup-open');
        }
    }
})();
