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

function randomNumbers() {
  const ranNums = [];
  for (let i = 0; i < 3; i += 1) {
    let ranNum = Math.floor(Math.random() * 10 + 1);
    ranNums.push(ranNum);
  }
  return ranNums;
}

async function checkNumbers() {
  try {
    const result = await numbers(...randomNumbers());
    console.log(result);
  } catch (e) {
    console.log(e.message);
  }
}

checkNumbers();
