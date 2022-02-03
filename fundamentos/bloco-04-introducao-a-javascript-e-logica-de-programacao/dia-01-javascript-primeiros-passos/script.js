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
const num1 = 4;
const num2 = 8;
const num3 = 10;

if ((num1 % 2) !== 0 || (num2 % 2) !== 0 || (num3 % 2) !== 0) {
  console.log(true);
} else {
  console.log(false);
};

// Exercicio 10
let valorCusto = 150;
let valorVenda = 200;
let valorCustoTotal = valorCusto + (valorCusto * 0.2);
let lucro = valorVenda - valorCustoTotal;

if (valorCusto < 0 || valorVenda < 0) {
  console.log('erro');
} else {
  console.log(lucro * 1000);
}

// Exercicio 11
let salarioBruto = '2600';
let inss = '';
let salarioBase = '';
let ir = '';
let salarioLiquido = '';

console.log(`Salário bruto de R$${salarioBruto}`);

if (salarioBruto > 5189.82) {
  inss = 570.88;
  console.log(`INSS - alíquota máxima -> R$${inss}`);
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
  console.log(`INSS - alíquota de 11% -> R$${inss}`);
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  inss =  salarioBruto * 0.09;
  console.log(`INSS - alíquota de 9% -> R$${inss}`);
} else {
  inss = salarioBruto * 0.08;
  console.log(`INSS - alíquota de 8% -> R$${inss}`);
};

salarioBase = salarioBruto - inss;

console.log(`Salário-base de R$${salarioBase}`);

if (salarioBase > 4664.68) {
  ir = salarioBase * 0.275 - 869.36;
  console.log(`IR de 27,5% e dedução de R$869,36 -> R$${ir}`);
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
  ir = salarioBase * 0.225 - 636.13;
  console.log(`IR de 22,5% e dedução de R$636,13 -> R$${ir}`);
} else if (salarioBase > 2826.65 && salarioBase <= 3751.05) {
  ir = salarioBase * 0.15 - 354.80;
  console.log(`IR de 15% e dedução de R$354,80 -> R$${ir}`);
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
  ir = salarioBase * 0.075 - 142.80;
  console.log(`IR de 7,5% e dedução de R$142,80 -> R$${ir}`);
} else {
  ir = 0;
  console.log(`Isento de IR`);
};

salarioLiquido = salarioBase - ir;

console.log(`Salário líquido de R$${salarioLiquido}`);