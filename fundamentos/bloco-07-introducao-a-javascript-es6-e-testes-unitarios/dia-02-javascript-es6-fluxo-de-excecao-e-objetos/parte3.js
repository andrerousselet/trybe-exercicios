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

console.log(`-1-`);

// //Exercicio 1
const function1 = (obj, key, value) => {
  obj[key] = value;
  return obj;
}
console.log(function1(lesson2, 'turno', 'noite'));

console.log(`-2-`);

//Exercicio 2
const function2 = (obj) => Object.keys(obj).forEach((key) => console.log(`${key}`));
function2(lesson3);

console.log(`-3-`);

//Exercicio 3
const function3 = (obj) => console.log(Object.keys(obj).length);
function3(lesson1);

console.log(`-4-`);

//Exercicio 4
const function4 = (obj) => Object.values(obj).forEach((value) => console.log(`${value}`));
function4(lesson3);

console.log(`-5-`);

//Exercicio 5
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
console.log(allLessons);

console.log(`-6-`);

//Exercicio 6
const function6 = () => {
  let sum = 0;
  Object.values(allLessons).forEach(prop => {
    sum += prop.numeroEstudantes;
  });
  return sum;
}
console.log(function6());

console.log(`-7-`);

//Exercicio 7
const function7 = (key, index) => {
  const prop = allLessons[key];
  return Object.values(prop)[index];
};
console.log(function7('lesson1', 0));

console.log(`-8-`);

//Exericio 8
const function8 = (obj, key, value) => {
  const array = Object.entries(obj);
  let result = false;
  for (let item in array) {
    if (array[item][0] === key && array[item][1] === value) result = true;
  }
  return result;
}
console.log(function8(lesson3, 'professor', 'Maria Clara'));
