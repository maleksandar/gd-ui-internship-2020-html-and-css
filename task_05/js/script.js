const navbarToggler = document.getElementById('navbar__toggler');
const navbarNav = document.querySelector('.navbar__nav');

const NAVBAR_CLOSED_CLASSNAME = 'navbar__nav--closed';

navbarToggler.addEventListener('click', () => {
	navbarNav.classList.toggle(NAVBAR_CLOSED_CLASSNAME);
});
