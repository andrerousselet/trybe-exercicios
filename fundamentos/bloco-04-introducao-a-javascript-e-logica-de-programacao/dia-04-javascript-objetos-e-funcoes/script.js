//PARTE I - Objects e Funções
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Exercicio 1
console.log('Bem-vinda, ' + info.personagem);

//Exercicio 2
info.recorrente = 'Sim';
console.log(info);

//Exercicio 3
for (let key in info) {
  console.log(key);
};

//Exercicio 4
for (let key in info) {
  console.log(info[key]);
};

//Exercicio 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
//Contribuição do aluno x (não lembro o nome...) durante a mentoria do Matheus - dia 07 de Fev
for (let key in info) {
  if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
};


//Exercicio 6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama \'' + leitor.livrosFavoritos[0].titulo + '\'.');

//Exercicio 7
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});
console.log(leitor);

//Exercicio 8
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');


// PARTE II - Funções
//Exercicio 1
function verificaPalindrome(word) {
  if (word.split('').reverse().join('') === word) {
    return true;
  }
  return false
};
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));
//código pesquisado no site: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/


//Exercicio 2
function indiceDeMaiorValor (array) {
  let biggest = 0;
  for (let key in array) {
    if (array[key] > biggest) {
      biggest = array[key];
    }
  }
  return array.indexOf(biggest);
};
console.log(indiceDeMaiorValor([2, 3, 6, 7, 10, 1]));

//Exercicio 3
function indiceDeMenorValor (array) {
//  let smallest = array[indiceDeMaiorValor(array)];
  let smallest = 10e10;
  for (let key in array) {
    if (array[key] < smallest) {
      smallest = array[key];
    }
  }
  return array.indexOf(smallest);
};
console.log(indiceDeMenorValor([2, 4, 6, 7, 10, 0, -3]));


//Alternativa para exercicios 2 - https://bobbyhadz.com/blog/javascript-get-index-of-max-value-in-array
function indiceDeMaiorValor (array) {
  let max = Math.max(...array);
  return array.indexOf(max);
};
console.log(indiceDeMaiorValor([2, 3, 6, 7, 10, 1]));

//Alternativa para exercicios 3 - https://bobbyhadz.com/blog/javascript-get-index-of-min-value-in-array
function indiceDeMenorValor (array) {
  let min = Math.min(...array);
  return array.indexOf(min);
};
console.log(indiceDeMenorValor([2, 4, 6, 7, 10, 0, -3]));

//spread operator (...) = unpacks the values from the array and pass them as multiple, comma-separated arguments.


//Exercicio 4
function maiorPalavra(array) {
  let newArray = [];
  for (let nome of array) {
    newArray.push(nome.length);
  }
  let indice = newArray.indexOf(Math.max(...newArray));
  let maiorPalavra = array[indice];
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));