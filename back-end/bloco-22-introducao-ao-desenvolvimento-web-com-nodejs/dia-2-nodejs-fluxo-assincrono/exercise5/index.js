const fs = require('fs/promises');

async function writeFiles() {
  try {
    const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
    const writePromises = strings.map((string, index) => fs.writeFile(`./file${index + 1}.txt`, string));
    await Promise.all(writePromises);
    const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];
    const readPromises = files.map((file) => fs.readFile(file, 'utf-8'));
    const contents = await Promise.all(readPromises)
    await fs.writeFile('fileAll.txt', contents.join(' '));
  } catch (error) {
    console.log(error.message)
  }
}

writeFiles();
