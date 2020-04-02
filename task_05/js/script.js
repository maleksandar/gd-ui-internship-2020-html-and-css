const navbarToggler = document.getElementById('navbar__toggler');
const navbarNav = document.querySelector('.navbar__nav');

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
const DEBOUNCE_WAIT_FACTOR = 200;
let isCounterShown = true;

window.addEventListener('scroll', debounce(() => {
	const pageYOffset = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
	const navbarHeight = document.querySelector('.navbar').offsetHeight;

	if (pageYOffset >= headerHeight) {
		document.body.classList.add(NAVBAR_FIXED_CLASSNAME);
		document.body.style.paddingTop = navbarHeight + 'px';
	} else {
		document.body.classList.remove(NAVBAR_FIXED_CLASSNAME);
		document.body.style.paddingTop = '0';
	}

	const sectionCountingHeight = document.querySelector('.section-counting').offsetHeight;
	const counters = document.querySelectorAll('.section-counting__number');
	const COUNTER_DURATION = 2000;

	if (pageYOffset >= sectionCountingHeight && isCounterShown) {
		isCounterShown = false;
		counters.forEach((counter) => animateCounter(counter, 0, Number(counter.innerHTML), COUNTER_DURATION));
	}
}, DEBOUNCE_WAIT_FACTOR));

const animateCounter = (element, start, end, duration) => {
	const range = end - start;
	const increment = end > start ? 1 : -1;
	const stepTime = Math.abs(Math.floor(duration / range));
	let current = start;

	const timer = setInterval(() => {
		current += increment;
		element.innerHTML = current;

		if (current === end) {
			clearInterval(timer);
		}
	}, stepTime);
};

// Accordion
const ACCORDION_HEADER_CLASSNAME = 'accordion__header';
const accordionHeaders = document.getElementsByClassName(ACCORDION_HEADER_CLASSNAME);

for (let i = 0; i < accordionHeaders.length; i++) {
	accordionHeaders[i].addEventListener('click', (event) => {
		accordionClick(event);
	});
}

const accordionClick = (event) => {
	let targetClicked = event.target;
	let classClicked = targetClicked.classList;

	while ((classClicked[0] !== ACCORDION_HEADER_CLASSNAME)) {
		targetClicked = targetClicked.parentElement;
		classClicked = targetClicked.classList;
	}

	const content = targetClicked.nextElementSibling;

	if (content.style.maxHeight) {
		content.style.maxHeight = null;
		content.style.margin = '0 1rem';
		changeArrow(targetClicked, 'up', 'down');
	} else {
		const allContents = document.getElementsByClassName('accordion__content');

		for (let i = 0; i < allContents.length; i++) {
			if (allContents[i].style.maxHeight) {
				allContents[i].style.maxHeight = null;
				allContents[i].style.margin = '0 1rem';
				changeArrow(allContents[i].previousElementSibling, 'up', 'down');
			}
		}

		changeArrow(targetClicked, 'down', 'up');
		content.style.maxHeight = '17rem';
		content.style.margin = '1rem';
	}
};

const changeArrow = (element, from, to) => {
	element.lastElementChild.classList.remove(`mdi-chevron-${from}`);
	element.lastElementChild.classList.add(`mdi-chevron-${to}`);
};

// Open and close Map
const map = document.getElementById('map');
const mapTitle = document.querySelector('.section__title--map');
let isMapOpen = true;

mapTitle.addEventListener('click', () => closeAndOpenMap());

const closeAndOpenMap = () => {
	if (isMapOpen) {
		map.style.maxHeight = '50rem';
	} else {
		map.style.maxHeight = '0';
	}

	mapTitle.innerHTML = `
		<span class="section__subtitle section__subtitle--map"> 
    	<i class="mdi mdi-map-marker"></i>
    </span>
    ${isMapOpen ? 'Close' : 'Open'} map
	`;

	isMapOpen = !isMapOpen;
};

// Leaflet Map
const mymap = L.map('map').setView([44.9256, 20.4489], 10);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
}).addTo(mymap);
