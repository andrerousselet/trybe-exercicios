const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(arr) {
  const newArray = arr.reduce((acc, curr) => acc.concat(curr));
  return newArray;
}
console.log(flatten(arrays));