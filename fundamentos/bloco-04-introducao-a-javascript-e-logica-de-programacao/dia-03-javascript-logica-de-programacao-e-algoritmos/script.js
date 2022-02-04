//Exercicio 1
let fatorial = 10;
for (let index = fatorial - 1; index >= 1; index -= 1) {
  console.log(fatorial);
  fatorial *= index;
  console.log(index);
};
console.log(fatorial);


//Exercicio 2
let word = 'tryber';
let inverted = '';
for (let index = word.length - 1; index >= 0; index -= 1) {
  inverted += word[index];
};
console.log(inverted);


