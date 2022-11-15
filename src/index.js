import './reset.css';
import './styles.css';

const doc = document.getElementById('content');

const title = document.createElement('h1');
title.textContent = 'Welcome to my restaurant';

const intro = document.createElement('p');
intro.textContent = 'Literally the best place to eat in the world';

const contact = document.createElement('div');

const contactTitle = document.createElement('h2');
contactTitle.textContent = 'Contact';

contact.appendChild(contactTitle);

const contactList = document.createElement('ul');
const contact1 = document.createElement('li');
contact1.textContent = 'Addres 1';
contactList.appendChild(contact1);
const contact2 = document.createElement('li');
contact2.textContent = 'Town';
contactList.appendChild(contact2);
const contact3 = document.createElement('li');
contact3.textContent = 'Postcode';
contactList.appendChild(contact3);
const contact4 = document.createElement('li');
contact4.textContent = 'Phone';
contactList.appendChild(contact4);
const contact5 = document.createElement('li');
contact5.textContent = 'Email';
contactList.appendChild(contact5);

const menu = document.createElement('div');

const menuTitle = document.createElement('h2');
menuTitle.textContent = 'Menu';

menu.appendChild(menuTitle);

const menuStarter = document.createElement('h3');
menuStarter.textContent = 'Starters';

menu.appendChild(menuStarter);

const starterList = document.createElement('ul');
const starter1 = document.createElement('li');
starter1.textContent = 'Fish';
starterList .appendChild(starter1);
const starter2 = document.createElement('li');
starter2.textContent = 'Veg';
starterList.appendChild(starter2);
const starter3 = document.createElement('li');
starter3.textContent = 'Meat';
starterList.appendChild(starter3);

menu.appendChild(starterList);

const menuMain = document.createElement('h3');
menuMain.textContent = 'Mains';

menu.appendChild(menuMain);

const mainList = document.createElement('ul');
const main1 = document.createElement('li');
main1.textContent = 'Fish';
mainList .appendChild(main1);
const main2 = document.createElement('li');
main2.textContent = 'Veg';
mainList.appendChild(main2);
const main3 = document.createElement('li');
main3.textContent = 'Meat';
mainList.appendChild(main3);

menu.appendChild(mainList);

const menuPud = document.createElement('h3');
menuPud.textContent = 'Puds';

menu.appendChild(menuPud);

const pudList = document.createElement('ul');
const pud1 = document.createElement('li');
pud1.textContent = 'Choc';
pudList .appendChild(pud1);
const pud2 = document.createElement('li');
pud2.textContent = 'Ice cream';
pudList.appendChild(pud2);

menu.appendChild(pudList);

doc.appendChild(title);
doc.appendChild(intro);
doc.appendChild(contact);
doc.appendChild(menu);

console.log(title);