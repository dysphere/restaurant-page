import './style.css'

const contact = () => {
    const contain = document.querySelector('#container');
    const header = document.createElement('h1');
    const phoneH = document.createElement('h1');
    const phone = document.createElement('h2');
    const add = document.createElement('h1');
    const place = document.createElement('h2');
    const cdiv = document.createElement('div');

    cdiv.setAttribute('class', 'contdiv')

    header.textContent = "Contact Us"
    phoneH.textContent = "Phone Number"
    phone.textContent = "555-555-555"
    add.textContent = "Address"
    place.innerHTML = "1234 Fake Lane,<br>New York, NY<br>"

    cdiv.appendChild(header);
    cdiv.appendChild(phoneH);
    cdiv.appendChild(phone);
    cdiv.appendChild(add);
    cdiv.appendChild(place);
    contain.appendChild(cdiv);

    return contain;
}

export {contact};