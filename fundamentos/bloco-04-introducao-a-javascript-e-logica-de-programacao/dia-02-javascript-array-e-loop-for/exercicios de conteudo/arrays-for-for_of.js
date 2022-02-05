//  ARRAYS  //

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length); // Mostra a quantidade de itens na array
// 3


/////////////////////////////////////////////////////////////////////


let tasksList = ['Tomar café', 'Brincar com o cachorro', 'Reunião'];

console.log(tasksList.sort()); // Coloca os itens da array em ordem alfabética
// [ 'Brincar com o cachorro', 'Reunião', 'Tomar café' ]


/////////////////////////////////////////////////////////////////////


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café


/////////////////////////////////////////////////////////////////////


let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro


/////////////////////////////////////////////////////////////////////


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa no final da array
console.log(tasksList);
// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']


/////////////////////////////////////////////////////////////////////


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa no INÍCIO da array
console.log(tasksList);
// ['Fazer exercícios da Trybe', 'Tomar café', 'Reunião', 'Brincar com o cachorro']


/////////////////////////////////////////////////////////////////////


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.pop();  // remove a última tarefa
console.log(tasksList);
// [ 'Tomar café', 'Reunião' ]


/////////////////////////////////////////////////////////////////////


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.shift();  // remove a PRIMEIRA tarefa
console.log(tasksList);
// [ 'Reunião', 'Brincar com o cachorro' ]


/////////////////////////////////////////////////////////////////////


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let indexOfTask = tasksList.indexOf('Reunião'); // Mostra a posição do item na array
console.log(indexOfTask);
// 1


// Exercicio 1
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Exercicio 2
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Exercicio 3
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu);


//  FOR  //

//Exercicio 1
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}


// FOR/OF //

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"


let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31

//Exercicio 1
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
  console.log(name);
}
//João
//Maria
//Antônio
//Margarida