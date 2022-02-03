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
const ang1 = 60;
const ang2 = 60;
const ang3 = 60;

let soma = (ang1 + ang2 + ang3);

if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log('erro')
} else if (soma === 180) {
    console.log(true)
} else {
    console.log(false)
};

// Exercicio 6
let chessPiece = 'knight';
let move = '';

if (chessPiece === 'pawn') {
  move = 'forth and back';
  console.log(move);
} else if (chessPiece === 'bishop') {
  move = 'diagonals';
  console.log(move);
} else if (chessPiece === 'queen') {
  move = 'all around; multiple squares';
  console.log(move);
} else if (chessPiece === 'king') {
  move = 'all around; only one square';
  console.log(move);
} else if (chessPiece === 'knight') {
  move = 'the "L": two squares vertically and one square horizontally, or two squares horizontally and one square vertically';
  console.log(move);
} else if (chessPiece === 'rook') {
  move = 'forth and back, and also sideways; multiple squares';
  console.log(move);
};

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
converteNota(80);

// Exercicio 8
const num1 = 17;
const num2 = 9;
const num3 = 12;

if ((num1 % 2) === 0 || (num2 % 2) === 0 || (num3 % 2) === 0) {
  console.log(true);
} else {
  console.log(false);
};

// Exercicio 9


// Exercicio 10


// Exercicio 11