const sidebarButton = document.getElementById('sidebar-btn');
const body = document.body;

const LOCK_SCROLL_CLASSNAME = 'lock-scroll';
const SIDEBAR_CLASSNAME = 'sidebar';
const PAGE_CONTENT_CLASSNAME = 'page-content';
const BUTTON_OPENED_CLASSNAME = 'btn-opened';
const SIDEBAR_CLOSED_CLASSNAME = 'sidebar-closed';
const PAGE_CONTENT_ACTIVE_CLASSNAME = 'page-content-active';

sidebarButton.addEventListener('click', () => {
	body.classList.toggle(LOCK_SCROLL_CLASSNAME);
	sidebarButton.classList.toggle(BUTTON_OPENED_CLASSNAME);
	document.getElementsByClassName(SIDEBAR_CLASSNAME)[0].classList.toggle(SIDEBAR_CLOSED_CLASSNAME);
	document.getElementsByClassName(PAGE_CONTENT_CLASSNAME)[0].classList.toggle(PAGE_CONTENT_ACTIVE_CLASSNAME);
});
