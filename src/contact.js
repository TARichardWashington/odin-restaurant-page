export default function loadContact() {

    const doc = document.getElementById('page');

    doc.innerText = '';

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

    contact.appendChild(contactList);   

    doc.appendChild(contact);
}