const readline = require('readline-sync');

function raffle() {
  function randomNumber() {
    const num = Math.floor(Math.random() * 10);
    return num;
  }
  
  const chosenNum = readline.questionInt('\nEscolha um número de 0 a 10: ');
  
  const randomNum = randomNumber();

  const result = chosenNum === randomNum 
    ? console.log('Parabéns, número correto!')
    : console.log(`Opa, não foi dessa vez. O número era ${randomNum}`);

  const playAgain = readline.question('\nQuer jogar novamente? Digite "s" e tecle "enter" para sim ou qualquer outra coisa para não.');

  return playAgain === 's' && raffle();
}

raffle();
