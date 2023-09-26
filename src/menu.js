import './style.css'
import lemonade from './menu-pics/lemonade.jpg'
import soda from './menu-pics/soda.jpg'
import fries from './menu-pics/fries.jpg'
import mac from './menu-pics/mac.jpg'
import brisket from './menu-pics/brisket.jpg'
import ribs from './menu-pics/spare-ribs.jpg'
import chili from './menu-pics/chili.jpg'
import pulled from './menu-pics/pulled-pork.jpg'

const menu = () => {
const contain = document.querySelector("#container");
const mainH = document.createElement('h1');
const sideH = document.createElement('h1');
const drinkH = document.createElement('h1');


mainH.textContent = "Main Courses"
sideH.textContent = "Sides"
drinkH.textContent = "Beverages"

const iMain = [brisket, ribs, pulled]
const mainHead = ["Brisket", "Spare Ribs", "Pulled Pork"]
const mainDesc = ["Rich, meaty brisket that will melt in your mouth",
                "Tender spare ribs", "Succulent pulled pork"]

const iSides = [fries, mac, chili]
const sideHead = ["Fries", "Mac and Cheese", "Chili"]
const sideDesc = ["Crispy fries battered in lard",
                    "Rich mac and cheese with five different cheeses",
                "Homemade chili, fresh from the pot"]

const iDrinks = [lemonade, soda]
const drinkHead = ["Lemonade", "Soda"]
const drinkDesc = ["A refreshing glass of ice cold lemonade, freshly squeezed",
                    "Choose from our selection of coke, ginger ale, and more"]

const maindiv = document.createElement('div');
maindiv.setAttribute("class", "maindiv")
maindiv.appendChild(mainH);
for (let i = 0; i < 3; i++) {
const main = document.createElement('div');
main.setAttribute('class', 'main')
const mainimg = new Image();
mainimg.src = iMain[i]
mainimg.setAttribute("class", "mainpic")
const mH = document.createElement('h2')
mH.textContent = mainHead[i]
const mD = document.createElement("p");
mD.textContent = mainDesc[i]
main.appendChild(mainimg);
main.appendChild(mH);
main.appendChild(mD);
maindiv.appendChild(main);
contain.appendChild(maindiv);
}
const sidediv = document.createElement('div');
sidediv.setAttribute('class', 'sidediv')
sidediv.appendChild(sideH);
for (let i = 0; i < 3; i++) {
    const side = document.createElement('div');
    side.setAttribute("class", "side")
    const sideimg = new Image();
    sideimg.src = iSides[i]
    sideimg.setAttribute("class", "sidepic");
    const sH = document.createElement('h2');
    sH.textContent = sideHead[i]
    const sD = document.createElement("p");
    sD.textContent = sideDesc[i]
    sidediv.appendChild(sideimg);
    sidediv.appendChild(sH);
    sidediv.appendChild(sD);
    contain.appendChild(sidediv);
}
const drinkdiv = document.createElement('div');
drinkdiv.setAttribute('class', 'drinkdiv');
drinkdiv.appendChild(drinkH);
for (let i = 0; i < 2; i++) {
    const drink = document.createElement('div');
    drink.setAttribute("class", "drink")
    const drinkimg = new Image();
    drinkimg.src = iDrinks[i]
    drinkimg.setAttribute("class", "drinkpic");
    const dH = document.createElement('h2');
    dH.textContent = drinkHead[i]
    const dD = document.createElement("p");
    dD.textContent = drinkDesc[i]
    drinkdiv.appendChild(drinkimg);
    drinkdiv.appendChild(dH)
    drinkdiv.appendChild(dD)
    contain.appendChild(drinkdiv);
    }
    


return contain;
}

export {menu}