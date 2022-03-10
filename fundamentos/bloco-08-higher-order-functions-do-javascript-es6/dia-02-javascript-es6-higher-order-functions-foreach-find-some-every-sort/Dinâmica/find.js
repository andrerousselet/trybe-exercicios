const estudantes = [
  {
    nome: 'Joel',
    Projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Mica',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Hugonardo',
    Projeto: 'Trybewarts',
    status: 97,
  },
  {
    nome: 'Aninha',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Joicy',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Ronald',
    Projeto: 'Trybewarts',
    status: 75,
  },
];

// 1 - Aqui na trybe estamos planejando um bot que vai enviar msg para as pessoas que ainda não terminaram o projeto, o objetivo é lembrá-las do prazo e oferecer alguma ajuda, o bot só consegue enviar uma msg por vez. A msg deve ter o formato: "Olá pessoa, o prazo para entrega do projeto é daqui a 3 dias, vc precisa de alguma ajuda?"

/*
* Usando duas alternativas de retorno para true e false, o find funciona como um forEach??
estudantes.find((elemento) => {
  elemento.status < 80 ? 
  console.log(`Olá ${elemento.nome}, o prazo para entrega do projeto é daqui a 3 dias, vc precisa de alguma ajuda?`)
  : console.log(`Parabéns a todos por finalizarem o projeto!`);
});
*/

estudantes.find((elemento) => {
  if (elemento.status < 80) {
    console.log(`Olá ${elemento.nome}, o prazo para entrega do projeto é daqui a 3 dias, vc precisa de alguma ajuda?`);
  }
});

console.log('--------');

// 2- A dinâmica de pessoas estudantes ajudando outras pessoas estudantes foi muito boa e produtiva, pensando nisso estamos planejando um bot que nos ajudará a chamar mais pessoas pra ajudar nas próximas vezes, o critério que vamos usar pra isso vai ser a pessoa ter terminado 100% do projeto. Lembrando que o bot só consegue enviar uma msg por vez. A msg enviada deve seguir o seguinte padrão: "Olá pessoa, parabéns por ter finalizado 100% do projeto, o que vc acha de ajudar outras pessoas da turma a tbm entregarem o projeto?"

estudantes.find((elemento) => {
  if (elemento.status === 100) console.log(`Olá ${elemento.nome}, parabéns por ter finalizado 100% do projeto, o que vc acha de ajudar outras pessoas da turma a tbm entregarem o projeto?`);
})

console.log('--------');

const numbers = [19, 21, 30, 3, 45, 22, 15];

numbers.find((number) => {
  if (number % 2 === 0) {
    console.log(number)
  }
});

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven)

// Com o console.log dentro da função, o find não acha somente o primeiro item e retorna, mas sim todos!