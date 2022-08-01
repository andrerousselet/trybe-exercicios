const readline = require('readline-sync');

function chooseScript() {
  const scripts = [
    {
      name: 'Calcular IMC',
      path: '../imc-calc/imc.js'
    },
    { 
      name: 'Calcular velocidade média',
      path: '../avg-speed/velocidade.js'
    },
    { 
      name: 'Jogo de adivinhação',
      path: '../raffle/sorteio.js'
    }
  ]

  const names = scripts.map(script => script.name);
  const script = readline.keyInSelect(names, 'Qual dos scripts você quer executar?');
  require(scripts[script].path);
}

chooseScript();
