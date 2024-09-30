// VARIABLES
let button = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchButton = document.querySelector('.bx-search');

// SIDEBAR SWITCHER
button.onclick = function () {
  sidebar.classList.toggle('active');
}

// ALERTS IN SIDEBAR
let alertsSidebar = document.querySelector('.alerts');
if ( alertsSidebar.innerHTML > 0 ) {
  alertsSidebar.classList.add('sidebar_alert');
} else {
    alertsSidebar.classList.remove('sidebar_alert');
  }
