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
// const function1 = (obj, key, value) => {
//   obj.key = value;
//   return obj;
// }
// console.log(function1(lesson2, 'turno', 'noite'));

//Exercicio 2
const function2 = (obj) => Object.keys(obj).forEach((key) => console.log(`- ${key}`));
function2(lesson3);