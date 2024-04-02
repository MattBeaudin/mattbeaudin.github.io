document.addEventListener('DOMContentLoaded', function() {
	// Manage navigation state
	const navToggle = document.querySelector('.nav-toggle');
	const mobileNav = document.querySelector('.mobile-list');
	navToggle.addEventListener('click', function(e) {
		mobileNav.classList.toggle('nav-open');
	}, false);
});
