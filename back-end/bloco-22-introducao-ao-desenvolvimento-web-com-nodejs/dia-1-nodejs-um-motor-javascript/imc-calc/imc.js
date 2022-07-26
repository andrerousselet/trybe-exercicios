const readline = require('readline-sync');

function calcImc() {
  const name = readline.question('Olá! Esse pequeno programa vai calcular o seu IMC. Vamos lá!!\n\nPrimeiro, qual o seu nome? ');

  const weight = readline.questionFloat('Qual o seu peso? ');
  const height = readline.questionFloat('Qual a sua altura? ');

  const imc = (weight / Math.pow(height, 2)).toFixed(2);

  console.log(`\nBom...${name}, você nos disse que seu peso é ${weight}kg e sua altura é ${height}m\nEntão, seu IMC é ${imc}`);
}

calcImc();
