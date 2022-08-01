const readline = require('readline-sync');

function calcImc() {
  const name = readline.question('Olá! Esse pequeno programa vai calcular o seu IMC. Vamos lá!!\n\nPrimeiro, qual o seu nome? ');

  const weight = readline.questionFloat('Qual o seu peso? ');
  const height = readline.questionFloat('Qual a sua altura? ');

  const imc = (weight / Math.pow(height, 2)).toFixed(2);

  function findCategory(calculatedImc) {
    if (calculatedImc >= 40) return 'Obesidade graus III e IV';
    if (calculatedImc >= 35 && calculatedImc < 40) return 'Obesidade grau II';
    if (calculatedImc >= 30 && calculatedImc < 35) return 'Obesidade grau I';
    if (calculatedImc >= 25 && calculatedImc < 30) return 'Acima do peso (sobrepeso)';
    if (calculatedImc < 18.5) return 'Abaixo do peso (magreza)';
    return 'Peso normal';
  }

  const category = findCategory(Number(imc))

  const message = `\nBom..., você nos disse que seu peso é ${weight}kg e sua altura é ${height}m\nEntão ${name}, seu IMC é ${imc} e você se enquadra na categoria: '${category}'.`

  console.log(message);
}

calcImc();
