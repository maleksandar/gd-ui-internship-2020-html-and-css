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

