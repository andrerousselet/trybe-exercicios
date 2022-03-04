//Parte I
//Exercicio 1
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(false);


//Exercicio 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordemCrescente = numbers => numbers.sort((a, b) => a - b);

console.log(`Os números ${ordemCrescente(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉


//Parte II
//Exercicio 1
const fatorial = (n) => {
  if (n === 0 || n < 0) {
    return 1
  }
  if (n > 0) {
    let produto = 1;
    for (let i = 2; i <= n; i += 1) {
      produto *= i;
    }
    return produto
  }
}

console.log(fatorial(-5));

/*
* Alternativa recursiva
* const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
* console.log(factorial(5));
*/

//Exercicio 2
const text = `Antônio foi no banheiro e não sabemos o que aconteceu`;
const longestWord = (text) => {
  const words = text.split(` `);
  let maxLength = 0;
  let longest;
  for (let word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longest = word;
    }
  }
  return longest;
}
console.log(longestWord(text));

/*
* Alternativa recursiva
* const longestWord = text => text.split(' ').sort((a, b) => b.length - a.length)[0];
* console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
*/

//Exercicio 4
const array = [`Git`, `HTML`, `CSS`, `JavaScript`, `Planilhas`];
function buildPhrase(name) {
  const str = 
  `Tryber ${name} aqui! Tudo bem?
  Minhas 5 principais habilidades são:`
  array.forEach((skill) => {
  `- ${skill}`
  });
  return `${str} ${array}`;
}

console.log(buildPhrase(`Andre`));
