// Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta'));

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = document.getElementById('elementoOndeVoceEsta').parentNode;
pai.style.background = 'lightgrey';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let filhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild;
filhoDoFilho.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

// Acesse o primeiroFilho a partir de pai.
console.log(document.querySelector('#pai').firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling); 

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai.
console.log(document.querySelector('#pai').firstElementChild.nextElementSibling.nextElementSibling);
