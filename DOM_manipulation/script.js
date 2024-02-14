const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const imRed = document.createElement('p');
imRed.classList.add('red');
imRed.style.color = 'red';
imRed.textContent = 'Hey I\'m red!'

container.appendChild(imRed);

const blueHeader = document.createElement('h3');
blueHeader.classList.add('blue');
blueHeader.textContent = 'I\'m a blue h3';

container.appendChild(blueHeader);

const box = document.createElement('div');
box.classList.add('box');
box.setAttribute('style', 'background: pink; border-style: solid; border-color: black;');

const title = document.createElement('h1');
title.textContent = "I'm h1 in the div!"
title.classList.add('title');

const divText = document.createElement('p');
divText.textContent = 'Me too!'
divText.classList.add('divContent');

box.appendChild(title);
box.appendChild(divText);

container.appendChild(box);