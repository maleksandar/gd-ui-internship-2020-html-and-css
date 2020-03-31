const hamburgerButton = document.querySelector('body > header > nav > div.navbar__box-essentials > div.navbar__essential-controls > a.fas.fa-bars.btn');
const controlList = document.querySelector('body > header > nav > div.navbar__other-controls');

hamburgerButton.addEventListener('click' , () => {
controlList.classList.toggle('u-collapsed');
});