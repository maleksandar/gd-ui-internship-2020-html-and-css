const navbarToggler = document.getElementById('navbar__toggler');
const navbarNav = document.querySelector('.navbar__nav');
const navbar = document.querySelector('.navbar');

const NAVBAR_CLOSED_CLASSNAME = 'navbar__nav--closed';
const NAVBAR_FIXED_CLASSNAME = 'navbar--fixed';

// Toggle navbar
navbarToggler.addEventListener('click', (event) => {
	event.preventDefault();
	navbarNav.classList.toggle(NAVBAR_CLOSED_CLASSNAME);
});

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * @param func
 * @param wait
 * @param immediate
 * @returns {function(...[*]=)}
 */
const debounce = (func, wait, immediate) => {
	let timeout;

	return function () {
		const context = this;
		const args = arguments;

		const later = () => {
			timeout = null;

			if (!immediate) {
				func.apply(context, args);
			}
		};

		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

		if (callNow) {
			func.apply(context, args);
		}
	};
};

// Set navbar to be fixed on top when user scrolls bellow header section
// Cross-browser compatibility
const supportPageOffset = window.pageXOffset !== undefined;
const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
const headerHeight = document.querySelector('.header').offsetHeight;

window.addEventListener('scroll', debounce(() => {
	const pageYOffset = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
	const navbarHeight = document.querySelector('.navbar').offsetHeight;

	if (pageYOffset >= headerHeight) {
		navbar.classList.add(NAVBAR_FIXED_CLASSNAME);
		document.body.style.paddingTop = navbarHeight + 'px';
	} else {
		navbar.classList.remove(NAVBAR_FIXED_CLASSNAME);
		document.body.style.paddingTop = '0';
	}
}, 200));


// Accordion 
const accordion = document.getElementsByClassName("accordion__header");
for (let i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', (event) => {
		accordionClick(event);
	});
}

const accordionClick = (event) => {
	let targetClicked = event.target;
	let classClicked = targetClicked.classList;

	while ((classClicked[0] !== "accordion__header")) {
		targetClicked = targetClicked.parentElement;
		classClicked = targetClicked.classList;
	}

	let content = targetClicked.nextElementSibling;
	if (content.style.maxHeight) {
		content.style.maxHeight = null;
	} else {
		let allContents = document.getElementsByClassName("accordion__content");
		for (let i = 0; i < allContents.length; i++) {
			if (allContents[i].style.maxHeight) {
				allContents[i].style.maxHeight = null;
			}
		}
		content.style.maxHeight = content.scrollHeight + "px";
	}
<<<<<<< Updated upstream
};
=======
}

// Open and close Map
const map = document.getElementById("map");
let mapTitle = document.querySelector(".section__title--map");
let isMapOpen = true;

mapTitle.addEventListener('click', () => closeAndOpenMap());

const closeAndOpenMap = () => {
    if(isMapOpen) {
        map.style.display = "block";
    } else {
        map.style.display = "none";
    }
     
    mapTitle.innerHTML = `<span class="section__subtitle section__subtitle--map"> 
            <i class="mdi mdi-map-marker"></i>
        </span>
        ${isMapOpen ? "Close" : "Open"} map`;
    
    isMapOpen = !isMapOpen;
}


// Leaflet
var mymap = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);



>>>>>>> Stashed changes
