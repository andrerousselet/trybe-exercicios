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


//Exercicio 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (student, template) => {
  if (student === template) {
    return 1;
  }
  if (student === 'N.A') {
    return 0;
  }
  return -0.5;
}

const finalGrade = (studentAnswers, rightAnswers, callback) => {
  let grade = 0;
  for (let i = 0; i < studentAnswers.length; i += 1) {
    const points = callback(studentAnswers[i], rightAnswers[i]);
    grade += points;
  }
  return grade;
}

console.log(finalGrade(STUDENT_ANSWERS, RIGHT_ANSWERS, checkAnswers));