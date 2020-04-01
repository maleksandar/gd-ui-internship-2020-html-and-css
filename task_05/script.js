const hamburgerButton = document.querySelector(
  'body > header > nav > div.navbar__box-essentials > div.navbar__essential-controls > a.fas.fa-bars.btn',
);
const controlList = document.querySelector(
  'body > header > nav > div.navbar__other-controls',
);
//add functionality to hamburger button
hamburgerButton.addEventListener('click', () => {
  controlList.classList.toggle('u-collapsed');
});
// makes sure only one collapsible with same class can be open
const collapsibles = Array.from(
  document.getElementsByClassName('collapsible__toggle'),
);
collapsibles.forEach((collapsible) => {
  collapsible.addEventListener('change', (e) => {
    collapsibles.forEach((collapsible) => {
      if (collapsible != e.target) {
        collapsible.checked = false;
      }
    });
  });
});
function countOnScroll() {
  let flag = true;
  const achievement = document.querySelector('.achievement');
  const offset =
    achievement.getBoundingClientRect().top +
    window.scrollY -
    window.innerHeight;
  console.log(offset);
  window.onscroll = function() {
    if (document.scrollingElement.scrollTop > offset && flag) {
      flag = false;
      countUp();
    }
  };
}


//initialization of map
function initMap() {

  let skoja = {lat: 44.747110, lng: 20.431930};

  let map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 4,
        center: skoja
      });
  
  let marker = new google.maps.Marker({
    position: skoja,
    map: map
    });

  }


const mapSection = document.querySelector('body > section.map');
const mapHeading = document.querySelector('body > section.map > div.primary-heading.primary-heading--size-sm.primary-heading--map');
const openCloseMap = document.querySelector('body > section.map > div.primary-heading.primary-heading--size-sm.primary-heading--map > h1');
const mapViewfinder = document.querySelector('#map');

//add open/close map behaviour
mapHeading.addEventListener('click', () => {
  mapSection.classList.toggle('map--active');
  mapHeading.classList.toggle('primary-heading--map-active');
  openCloseMap.innerHTML  = (openCloseMap.innerHTML === "OPEN MAP") ? "CLOSE MAP" : "OPEN MAP";
  mapViewfinder.classList.toggle('map--active');
});

// count up animation
function countUp() {
  const counters = Array.from(document.getElementsByClassName('.js-count-up'));
  counters.forEach((counter) => {
    let i = 0;
    let duration = 60;
    let accelerator = 1;
    let delay;

    let number = parseInt(counter.textContent);
    (function count() {
      delay = duration - accelerator++;
      counter.textContent = i.toString();
      i++;
      if (i < number) {
        setTimeout(() => {
          count();
        }, delay);
      }
    })();
  });
}
countOnScroll();

