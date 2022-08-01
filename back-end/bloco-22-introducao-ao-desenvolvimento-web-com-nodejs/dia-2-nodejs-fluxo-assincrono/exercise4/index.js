const fs = require('fs/promises');

async function simpsons() {
  try {
    const simpsonsJSON = await fs.readFile('./simpsons.json', 'utf-8')
    const parsedSimpsons = JSON.parse(simpsonsJSON);
    const styledList = parsedSimpsons.map((char) => `${char.id} - ${char.name}`)
    styledList.forEach(e => console.log(e));
  } catch (error) {
    console.error(error);
  }
}

// simpsons();

async function findSimpsonById(id) {
  const simpsonsJSON = await fs.readFile('./simpsons.json', 'utf-8');
  const parsedSimpsons = JSON.parse(simpsonsJSON);
  const simpson = parsedSimpsons.find((simpson) => Number(simpson.id) === id);
  if (!simpson) throw new Error('id não encontrado');
  return simpson;
}

findSimpsonById(0)
  .then(response => console.log(response))
  .catch(error => console.log(error.message));
