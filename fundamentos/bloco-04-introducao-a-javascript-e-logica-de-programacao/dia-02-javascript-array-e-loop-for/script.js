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
console.log(`Média aritmética igual a ${sum / numbers.length}`);


//Exercicio 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (let numero of numbers) {
  sum += numero;
};
console.log(`Média aritmética igual a ${sum / numbers.length}`);
if ((sum / numbers.length) > 20) {
  console.log(`↳ Valor maior que 20`);
} else {
  console.log(`↳ Valor menor ou igual a 20`);
};


//Exercicio 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggestNumber = 0;
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > biggestNumber) {
    biggestNumber = numbers[i];
  }
}
console.log(biggestNumber);

//Exercicio 5 - usando for/of
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let biggestNumber = 0;
// for (let numero of numbers) {
//   if (numero > biggestNumber) {
//     biggestNumber = numero;
//   }
// };
// console.log(biggestNumber);


//Exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;
for (i = 0; i < numbers.length; i += 1) {
  if ((numbers[i] % 2) !== 0) {
    numerosImpares += 1;
  }
};
if (numerosImpares === 0) {
  console.log(`Nenhum valor ímpar encontrado`);
} else {
  console.log(numerosImpares);
};


//Exercicio 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber = numbers[0];
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  }
};
console.log(smallestNumber);


//Exercicio 8
let array = [];

for (let i = 0; i < 25; i += 1) {
  if (array[0] === undefined) {
    console.log(array.push(1));
  } else {
    console.log(array.push((array.length) + 1));
  }
};
console.log(array);


//Exercicio 9
let array = [];

for (let i = 0; i < 25; i += 1) {
  if (array[0] === undefined) {
    array.push(1);
  } else {
    array.push((array.length) + 1);
  }
};
for (let number of array) {
  console.log(number/2);
}


//Bônus 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);
//Código copiado de (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) e (https://www.w3schools.com/js/js_array_sort.asp)


//Bônus 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.sort(function(a, b) {
  return b - a;
});
console.log(numbers);
//Código copiado de (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) e (https://www.w3schools.com/js/js_array_sort.asp)