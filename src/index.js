import './style.css'
import {home} from './home.js'
import {contact} from './contact.js'
import {menu} from './menu.js'

const contain = document.querySelector("#container");
contain.textContent = ""
document.body.appendChild(home());


const homeButton = document.querySelector(".home");
homeButton.addEventListener('click', () => {
    const contain = document.querySelector("#container");
    contain.textContent = ""
    document.body.appendChild(home());
})

const menuButton = document.querySelector(".menu");
menuButton.addEventListener('click', () => {
    const contain = document.querySelector("#container");
    contain.textContent = ""
    document.body.appendChild(menu());
})

const contactB = document.querySelector('.contact');
contactB.addEventListener('click', () => {
    const contain = document.querySelector("#container");
    contain.textContent = ""
    document.body.appendChild(contact());
})