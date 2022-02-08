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
//código pesquisado no site: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/