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