export default function contact()
{
	const element = document.createElement('div');
	const heading = document.createElement('h1');
	heading.innerHTML = 'Contact';
	const h2 = document.createElement('h2');
	h2.innerHTML = 'John Xina';
	const para = document.createElement('p');
	para.innerHTML = 'Number: BINGCHILLING';
	element.appendChild(heading);
	element.appendChild(h2);
	element.appendChild(para);
	return element;
}
