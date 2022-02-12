const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const lis = document.getElementsByTagName('li');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// A primeira caixa está um pouco acima das outras pq ela tem a classe 'tech', e essa classe tem uma propriedade no css (transform) que altera o eixo y (altura) em 20px.


// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// for (let li of lis) {
//   li.addEventListener('click', addClassTech)
// }
// function addClassTech(event) {
//   event.target.className = 'tech';
// }

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
for (let li of lis) {
  li.addEventListener('click', addClassTech);
  li.addEventListener('keyup', changeText);
  li.addEventListener('dblclick', resetText);
}
function addClassTech(event) {
  for (let li of lis) {
    li.classList.remove('tech');
  }
  event.target.className = 'tech';
}

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento com a classe 'tech';
input.addEventListener('keyup', changeText);

function changeText() {
  for (let li of lis) {
    if (li.className === 'tech') {
      li.innerText = input.value;
    }
  }
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', redirectTo);

function redirectTo() {
  window.location.href = 'https://andrerousselet.github.io/';
}
// Pesquisa no site https://www.w3schools.com/howto/howto_js_redirect_webpage.asp

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere a cor do mesmo;
myWebpage.addEventListener('mouseover', changeColor);
// myWebpage.addEventListener('mousemove', setPartyColor);
myWebpage.addEventListener('mouseleave', resetColor)
let originalColor = myWebpage.style.color;

function changeColor() {
  myWebpage.style.color = 'pink';
}

// function setPartyColor() {
//   myWebpage.style.color = 'purple';
// }

function resetColor() {
  myWebpage.style.color = originalColor;
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

// firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

let newElement = document.createElement('p');
input.addEventListener('change', function() {
  newElement.innerText = input.value;
  document.querySelector('main').appendChild(newElement);
})