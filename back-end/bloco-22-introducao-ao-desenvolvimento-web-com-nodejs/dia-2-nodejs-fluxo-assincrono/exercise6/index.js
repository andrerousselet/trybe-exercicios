const readline = require('readline-sync');
const fs = require('fs/promises');

async function main() {
  try {
    const chosenFile = readline.question('Qual o caminho do arquivo que você quer ler? ');
    const fileContent = await fs.readFile(chosenFile, 'utf-8');
    console.log(fileContent);
  } catch (e) {
    console.log({ e, message: 'arquivo Inexistente!' })
  }
}

main();
