const readline = require('readline-sync');

function avgSpeed() {
  const distance = readline.questionInt('Qual a distância percorrida (em m)? ');
  const time = readline.questionInt('Essa distância foi percorrida em quanto tempo (em segundos)? ');

  const avg = (distance / time) * 3.6;
  const message = `A velocidade média do carro foi de ${avg} km/h.`

  console.log(message);
}

avgSpeed();
