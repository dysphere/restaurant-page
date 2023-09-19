import './style.css'
import img from './bbq-ribs.jpg'

const home = () => {
    const contain = document.querySelector('#container');
    const about = document.createElement('h1');
    const descr = document.createElement('p');

    descr.textContent = "Come down to try our BBQ today, best BBQ in the city"
    about.textContent = "About"

    const pic = new Image();
    pic.src = img;
    pic.setAttribute('class', 'front');

    contain.appendChild(about)
    contain.appendChild(descr)
    contain.appendChild(pic)

    return contain;
}

export {home};

