function numbers(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números'));
    }
  })
}

numbers(1, 2, '1')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
