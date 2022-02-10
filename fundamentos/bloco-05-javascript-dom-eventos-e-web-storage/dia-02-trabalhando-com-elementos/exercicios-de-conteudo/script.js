// Acesse o elemento elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta'));

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let father = document.getElementById('elementoOndeVoceEsta').parentNode;
father.style.background = 'lightgrey';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let filhoDoFilho = document.getElementById('elementoOndeVoceEsta').firstElementChild;
filhoDoFilho.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

// Acesse o primeiroFilho a partir de pai.
console.log(document.querySelector('#pai').firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let texto = document.querySelector('#elementoOndeVoceEsta').nextSibling;
console.log(texto);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai.
console.log(document.querySelector('#pai').firstElementChild.nextElementSibling.nextElementSibling);


// Crie um irmão para elementoOndeVoceEsta.
let pai = document.querySelector('#pai');
let novoIrmao = document.createElement('section');
novoIrmao.id = 'novo-irmao';
pai.appendChild(novoIrmao);

// Crie um filho para elementoOndeVoceEsta.
let ondeEstou = document.getElementById('elementoOndeVoceEsta');
let filho = document.createElement('section');
filho.id = 'novo-filho-criado';
ondeEstou.appendChild(filho);

// Crie um filho para primeiroFilhoDoFilho.
let ondeEstou2 = document.getElementById('primeiroFilhoDoFilho');
let filhoDoFilho2 = document.createElement('section');
filhoDoFilho2.id = 'filho-do-primeiroFilhoDoFilho';
ondeEstou2.appendChild(filhoDoFilho2);