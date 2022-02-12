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


//Exercicio 4 - https://www.programiz.com/javascript/examples/prime-number
function highestPrimeNumber(limit) {
  let highestPrime = 0;
  for (let index = 2; index <= limit; index += 1) {
    let primeNumbers = [];
    for (let index2 = 2; index2 <= limit; index2 += 1) {
      if (index % index2 === 0) {
        primeNumbers.push(index2);
        if (primeNumbers.length === 1 && index === primeNumbers[0]) {
          highestPrime = primeNumbers[0];
        }
      }
    }
  }
  return highestPrime;
}
console.log(highestPrimeNumber(50));