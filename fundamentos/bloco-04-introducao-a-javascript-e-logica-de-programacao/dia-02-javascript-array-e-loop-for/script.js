// Exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
};


// Exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let numero of numbers) {
  sum += numero;
};
console.log(sum);

//Exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let numero of numbers) {
  sum += numero;
};
// console.log(sum);
// console.log(numbers.length);
console.log(sum / numbers.length);