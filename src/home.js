import './style.css'
import img from './bbq-ribs.jpg'

const home = () => {
    const body = document.querySelector("body");
    const contain = document.createElement('div');
    const about = document.createElement('h1');
    const descr = document.createElement('p');

    descr.textContent = "Come down to try our BBQ today, best BBQ in the city"
    about.textContent = "About"
    contain

    const pic = new Image();
    pic.src = img;
}  

