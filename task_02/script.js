const sidebarBtn = document.getElementById('sidebar-btn');
const BTN__OPEN__CLASSNAME = 'btn--open';
const SIDEBAR_CLOSSED__CLASSNAME = 'sidebar--closed';
const CONTENT_MOVED = 'content--moved'
sidebarBtn.addEventListener('click', (e) => {
   sidebarBtn.classList.toggle(BTN__OPEN__CLASSNAME);
   document.getElementById('sidebar').classList.toggle(SIDEBAR_CLOSSED__CLASSNAME);
   document.getElementById('content').classList.toggle(CONTENT_MOVED)
})
