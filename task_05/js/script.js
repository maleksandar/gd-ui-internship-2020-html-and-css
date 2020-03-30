const navbarToggler = document.getElementById('navbar__toggler');
const navbarNav = document.querySelector('.navbar__nav');
const navbar = document.querySelector('.navbar');

const NAVBAR_CLOSED_CLASSNAME = 'navbar__nav--closed';
const NAVBAR_FIXED_CLASSNAME = 'navbar--fixed';

// Toggle navbar
navbarToggler.addEventListener('click', () => {
	navbarNav.classList.toggle(NAVBAR_CLOSED_CLASSNAME);
});

// Set navbar to be fixed on top when user scrolls bellow header section
// Cross-browser compatibility
const supportPageOffset = window.pageXOffset !== undefined;
const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
const headerHeight = document.querySelector('.header').offsetHeight;

window.addEventListener('scroll', () => {
	const pageYOffset = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

	if (pageYOffset >= headerHeight) {
		navbar.classList.add(NAVBAR_FIXED_CLASSNAME);
	} else {
		navbar.classList.remove(NAVBAR_FIXED_CLASSNAME);
	}
});


const accordion = document.getElementsByClassName("accordion__header");
for (let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        accordionClick(event);        
    });
}

const accordionClick = () => {
	let targetClicked = event.target;
	let classClicked = targetClicked.classList;
	
    while ((classClicked[0] !== "accordion__header")){
        targetClicked = targetClicked.parentElement;
        classClicked = targetClicked.classList;
	}
	
	let content = targetClicked.nextElementSibling;
    if (content.style.maxHeight) {
		content.style.maxHeight = null;
    } else {
		let allContents = document.getElementsByClassName("accordion__content");
        for (let i = 0; i < allContents.length; i++){
            if (allContents[i].style.maxHeight) {
                allContents[i].style.maxHeight = null;
            }
		}
        content.style.maxHeight = content.scrollHeight + "px";
    }
}