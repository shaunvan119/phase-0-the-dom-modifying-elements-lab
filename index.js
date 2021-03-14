const header = document.getElementById('header');

const main = document.getElementById("main");
main.remove()

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id='victory';

document.getElementById('victory');

newHeader.innerHTML="<h1>SHAUN is the champion</h1>";