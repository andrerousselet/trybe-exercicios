function generateElement(element, className) {
  let newElement = document.createElement(element);
  newElement.className = className;
  return newElement;
}

function addElement(father, child) {
  father.appendChild(child);
}

//Exercicio 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body.
let body = document.querySelector('body');
let h1Title = document.createElement('h1');
h1Title.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1Title);

//Exercicio 2 - Adicione a tag main com a classe main-content como filho da tag body.
let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

//Exercicio 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2.
let section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

//Exercicio 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto.
let tagP = generateElement('p');
tagP.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
section.appendChild(tagP);

//Exercicio 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2.
let section2 = generateElement('section', 'left-content');
addElement(main, section2);

//Exercicio 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2.
let section3 = generateElement('section', 'right-content');
addElement(main, section3);

//Exercicio 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5.
let image = generateElement('img', 'small-image');
image.setAttribute('src', 'https://picsum.photos/200');
addElement(section2, image);
// Pesquisa na documentação sobre como adicionar outros atributos além de classe e id, no site https://www.w3schools.com/jsref/met_element_setattribute.asp.

//Exercicio 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6.
let lista = generateElement('ul', 'unordered-list');
addElement(section3, lista);
// for (i = 0; i < 10; i += 1) {
//   let item = generateElement('li', 'list-items');
//   addElement(lista, item);
//   console.log(item);
// }
let listaDeNumerosPorEscrito = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
// listaDeNumerosPorEscrito.pop();
for (i = 0; i < listaDeNumerosPorEscrito.length; i += 1) {
  let item = generateElement('li', 'list-items');
  addElement(lista, item);
  item.innerText = listaDeNumerosPorEscrito[i]
}

// Exercicio 9 - Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let index = 0; index < 3; index += 1) {
  let h3SubTitle = generateElement('h3', '');
  addElement(main, h3SubTitle);
  h3SubTitle.innerText = 'Sub-títulos'
  h3SubTitle.classList.add('description');
}

// PARTE 2
//Exercicio 1 - Adicione a classe title na tag h1 criada;
h1Title.classList.add('title');
// https://www.w3schools.com/jsref/prop_element_classlist.asp

//Exercicio 2 - Adicione a classe description nas 3 tags h3 criadas;
//Resolvido no exercicio 9.

//Exercicio 3 - Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();
main.removeChild(section2);

//Exercicio 4 - Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section;
section3.style.marginRight = 'auto';
//https://www.w3schools.com/jsref/prop_style_marginright.asp

//Exercicio 5 - Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
section.style.background = 'green';

//Exercicio 6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
for (i=0;i<2;i++) {
  lista.lastElementChild.remove();
}