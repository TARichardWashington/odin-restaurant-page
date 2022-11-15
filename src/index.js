import pageLoad from './initial-load';
import loadContact from './contact';
import loadMenu from './menu';

import './reset.css';
import './styles.css';

pageLoad();

const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function () {
    loadMenu();
});

const contactBtn = document.getElementById('contactBtn');

contactBtn.addEventListener('click', function () {
    loadContact();
});

