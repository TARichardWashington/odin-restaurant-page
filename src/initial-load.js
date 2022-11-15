export default function pageLoad() {

    const doc = document.getElementById('body');

    const title = document.createElement('h1');
    title.textContent = 'Welcome to my restaurant';

    const intro = document.createElement('p');
    intro.textContent = 'Literally the best place to eat in the world';

    const page = document.createElement('div');
    page.setAttribute('id','page');

    const menuBtn = document.createElement('button');
    menuBtn.setAttribute('id', 'menuBtn');
    menuBtn.innerText = 'Menu';

    const contactBtn = document.createElement('button');
    contactBtn.setAttribute('id', 'contactBtn');
    contactBtn.innerText = 'Contact';

    doc.appendChild(title);
    doc.appendChild(intro);
    doc.appendChild(menuBtn);
    doc.appendChild(contactBtn);

    doc.appendChild(page);
}