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

// findSimpsonById(0)
//   .then(response => console.log(response))
//   .catch(error => console.log(error.message));

async function removeSimpsonById(id) {
  try {
    const simpsonsJSON = await fs.readFile('./simpsons.json', 'utf-8');
    const parsedSimpsons = JSON.parse(simpsonsJSON);
    const simpsons = parsedSimpsons.filter((simpson) => Number(simpson.id) !== id);
    await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));
  } catch (e) {
    console.error(e)
  }
}

// removeSimpsonById(1);

async function createSimpsonFamily() {
  try {
    const simpsonsJSON = await fs.readFile('./simpsons.json', 'utf-8');
    const parsedSimpsons = JSON.parse(simpsonsJSON);
    const simpsons = parsedSimpsons.filter((simpson) => Number(simpson.id) < 5);
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));
  } catch (e) {
    console.error(e)
  }
}

// createSimpsonFamily();

async function addCharToSimpsonFamily(id, char) {
  if (!id || !char || typeof id !== 'string' || typeof char !== 'string') {
    throw new Error('invalid parameters!')
  }
  try {
    const simpsonsJSON = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const parsedSimpsons = JSON.parse(simpsonsJSON);
    const simpsons = [...parsedSimpsons, { id, name: char }];
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));
  } catch (e) {
    console.log(e.message)
  }
}

// addCharToSimpsonFamily('7', null);
