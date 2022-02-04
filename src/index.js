import './style.css';
import background from './images/background.png';
import homePage from './home.js';
import contactPage from './contact.js';
import menuPage from './menu.js';

function switchScreen(e)
{
	content.removeChild(content.childNodes[0]);
	if (e.target.id === 'contact-button')
		content.appendChild(contactPage());
	else if (e.target.id === 'home-button')
		content.appendChild(homePage());
	else
		content.appendChild(menuPage());
}

const header = document.querySelector('#header');
const footer = document.querySelector('#footer');
const content = document.querySelector('#content');
const homeBtn = document.createElement('button');
homeBtn.setAttribute('id', 'home-button');
const menuBtn = document.createElement('button');
menuBtn.setAttribute('id', 'menu-button');
const contactBtn = document.createElement('button');
contactBtn.setAttribute('id', 'contact-button');
homeBtn.innerHTML = 'Home';
menuBtn.innerHTML = 'Menu';
contactBtn.innerHTML = 'Contact';
header.appendChild(homeBtn);
header.appendChild(menuBtn);
header.appendChild(contactBtn);
homeBtn.addEventListener('click', switchScreen);
menuBtn.addEventListener('click', switchScreen);
contactBtn.addEventListener('click', switchScreen);

content.appendChild(homePage());
