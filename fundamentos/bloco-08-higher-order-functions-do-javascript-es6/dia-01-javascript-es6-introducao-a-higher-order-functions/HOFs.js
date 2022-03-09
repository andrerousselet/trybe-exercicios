//Exercicio 1
const generateEmployee = (name) => ({ name, email: `${name.toLowerCase().split(' ').join('_')}@trybe.com`});

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumon'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(generateEmployee));

//Exercicio 2
const check = (myNumber, number) => myNumber === number;

const lottery = (myNumber, func) => {
  const number = Math.floor((Math.random() * 5) + 1);
  if (func(myNumber, number)) {
    return 'Ah muleeeeke! Acertou!!'
  }
  return 'Errou rude...'
}

console.log(lottery(4, check));