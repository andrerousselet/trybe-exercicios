//Exercicio 1
let fatorial = 10;
for (let index = fatorial - 1; index >= 1; index -= 1) {
  // console.log(fatorial);
  fatorial *= index;
  // console.log(index);
};
console.log(fatorial);


//Exercicio 2
let word = 'tryber';
let inverted = '';
for (let index = word.length - 1; index >= 0; index -= 1) {
  inverted += word[index];
};
console.log(inverted);


//Exercicio 3.1
// Achando a maior palavra na array
let array = ['java', 'javascript', 'python', 'html', 'css'];
let numberOfChar = 0;
let biggestWord = '';
for (let index = 0; index < array.length; index += 1) {
  if ((array[index].length) > numberOfChar) {
    numberOfChar = array[index].length;
  }
  if (numberOfChar === array[index].length) {
    biggestWord = array[index];
  }
}
console.log(biggestWord);

//Exercicio 3.2
// Achando a menor palavra na array
let array = ['java', 'javascript', 'python', 'html', 'css'];
let numberOfChar = 50;
let smallestWord = '';
for (let index = 0; index < array.length; index += 1) {
  if ((array[index].length) < numberOfChar) {
    numberOfChar = array[index].length;
  }
  if (numberOfChar === array[index].length) {
    smallestWord = array[index];
  }
}
console.log(smallestWord);


//Exercicio 4
