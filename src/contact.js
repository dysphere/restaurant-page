import './style.css'

const contact = () => {
    const contain = document.querySelector('#container');
    const header = document.createElement('h1');
    const phoneH = document.createElement('h1');

    header.textContent = "Contact Us"
    phoneH.textContent = "Phone Number"

    contain.appendChild(header);
    contain.appendChild(phoneH);

    return contain;
}

export {contact};