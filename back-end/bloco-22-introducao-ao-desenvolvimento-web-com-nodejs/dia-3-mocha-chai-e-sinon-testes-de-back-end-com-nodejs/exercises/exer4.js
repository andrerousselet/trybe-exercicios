const fs = require('fs/promises');

async function write(filePath, content) {
  await fs.writeFile(filePath, content);
  return 'ok';
}

module.exports = { write }
