import './style.css'
import img from './bbq-ribs.jpg'

const home = () => {
    const contain = document.querySelector('#container');
    const aboutdiv = document.createElement('div');
    const aboutpic = document.createElement('div');
    const maindiv = document.createElement('div');
    const about = document.createElement('h1');
    const descr = document.createElement('p');

    descr.textContent = "Come down to try our BBQ today, best BBQ in the city"
    about.textContent = "About"

    const pic = new Image();
    pic.src = img;
    pic.setAttribute('class', 'front');
    aboutpic.appendChild(pic);
    maindiv.appendChild(aboutpic);

    aboutdiv.appendChild(about);
    aboutdiv.appendChild(descr);
    aboutdiv.setAttribute('class', 'frontdescr');
    maindiv.appendChild(aboutdiv);
    maindiv.setAttribute('class', 'mainp');
    contain.appendChild(maindiv);

    return contain;
}

export {home};

