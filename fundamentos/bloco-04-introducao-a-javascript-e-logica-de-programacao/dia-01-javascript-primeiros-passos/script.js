// Exercicio 1
const a = 9;
const b = 3;

let sum = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let resto = a % b;

// Exercicio 2
const c = 5;
const d = 10;

if (c > d) {
  console.log(c);
} else {
  console.log(d);
}

// Exercicio 3
const e = 5;
const f = 3;
const g = 8;

if (e > f && e > g) {
  console.log(e);
} else if (f > e && f > g) {
  console.log(f);
} else {
  console.log(g);
}

// Exercicio 4
const num = 1;

if (num > 0) {
  console.log('positive');
} else if (num < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

// Exercicio 5


// Exercicio 6


// Exercicio 7
function converteNota(porcentagem) {
  let nota = '';

  if (porcentagem >= 90) {
    nota = 'A';
  } else if (porcentagem >= 80) {
    nota = 'B';
  } else if (porcentagem >= 70) {
    nota = 'C';
  } else if (porcentagem >= 60) {
    nota = 'D';
  } else if (porcentagem >= 50) {
    nota = 'E';
  } else {
    nota = 'F';
  }
  return nota
}
console.log(converteNota(80));

// Exercicio 8


// Exercicio 9


// Exercicio 10


// Exercicio 11