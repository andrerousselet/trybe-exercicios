function numbers(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      return reject(new Error('Informe apenas números'));
    }
    const result = (a + b) * c;
    if (result < 50) return reject(new Error('Valor muito baixo'));
    resolve(result);
  })
}

numbers(1, 4, 9)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
