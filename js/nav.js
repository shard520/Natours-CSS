(function(){
	const checkbox = document.querySelector('.navigation__checkbox');
	const navLinks = document.querySelectorAll('.navigation__link');

	// Close navigation overlay when link is clicked
	for (const link in navLinks) {
    	navLinks[link].onclick = () => {checkbox.checked = false};
	};
}());