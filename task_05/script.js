const hamburgerButton = document.querySelector(
  'body > header > nav > div.navbar__box-essentials > div.navbar__essential-controls > a.fas.fa-bars.btn',
);
const controlList = document.querySelector(
  'body > header > nav > div.navbar__other-controls',
);
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
