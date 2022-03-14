const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// function containsA(arr) {
//   const newArray = arr.reduce((acc, element) => `${acc}${element}`).split('');
//   let sum = 0;
//   for (let letter of newArray) {
//     if (letter === 'a' || letter === 'A') sum += 1;
//   }
//   return sum;
// }

// console.log(containsA(names));

function containsA(arr) {
  const newArray = arr.reduce((acc, element) => `${acc}${element}`).split('');
  return newArray.reduce((acc, letter) => {
    if (letter === 'a' || letter === 'A') acc += 1;
    return acc;
  }, 0)
}

console.log(containsA(names));