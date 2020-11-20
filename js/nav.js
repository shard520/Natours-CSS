(function(){
	const checkbox = document.querySelector('.navigation__checkbox');
	// Select all links in navigation
	const navLinks = document.querySelectorAll('.navigation__link');
	// Select all tabbable elements
	const tabbableElements = document.querySelectorAll('.btn, .btn-text, .form__input, .form__radio-input, .footer__link');

	// Close navigation overlay when link is clicked
	for (const link in navLinks) {
    	navLinks[link].onclick = () => {
    	    checkbox.checked = false;
            changeTabbableElements();
   	    };
	};

	// Change which elements can get keyboard focus depending on if navigation is open or not
    function changeTabbableElements() {
        if (checkbox.checked) {
            for (i = 0; i < tabbableElements.length; i++) {
                tabbableElements[i].setAttribute('tabindex', '-1');
            };
            for (i = 0; i < navLinks.length; i++) { 
                navLinks[i].removeAttribute('tabindex'); 
            };
        } else {
            for (i = 0; i < navLinks.length; i++) { 
                navLinks[i].setAttribute('tabindex', '-1');
            };
            for (i = 0; i < tabbableElements.length; i++) {
                tabbableElements[i].removeAttribute('tabindex');
            };
        };
    }

	checkbox.onchange = ( () => {changeTabbableElements()} );

    changeTabbableElements();
}());