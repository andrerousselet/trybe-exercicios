const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// //Exercicio 1
const function1 = (obj, key, value) => {
  obj[key] = value;
  return obj;
}
console.log(function1(lesson2, 'turno', 'noite'));

console.log(`---`);

//Exercicio 2
const function2 = (obj) => Object.keys(obj).forEach((key) => console.log(`${key}`));
function2(lesson3);

console.log(`---`);

//Exercicio 3
const function3 = (obj) => console.log(Object.keys(obj).length);
function3(lesson1);

console.log(`---`);

//Exercicio 4
const function4 = (obj) => Object.values(obj).forEach((value) => console.log(`${value}`));
function4(lesson3);

console.log(`---`);

//Exercicio 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
console.log(allLessons);

console.log(`---`);

//Exercicio 6
