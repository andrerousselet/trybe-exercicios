const estudantes = [
  {
    nome: 'Joel',
    Projeto: 'Trybewarts',
    status: 98,
  },
  {
    nome: 'Mica',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Hugonardo',
    Projeto: 'Trybewarts',
    status: 97,
  },
  {
    nome: 'Aninha',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Joicy',
    Projeto: 'Trybewarts',
    status: 100,
  },
  {
    nome: 'Ronald',
    Projeto: 'Trybewarts',
    status: 75,
  },
];

// 1 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados em ordem alfabetica.

const ordemAlfabetica = estudantes.sort((a, b) => a.nome.localeCompare(b.nome));
console.table(ordemAlfabetica);

// 2 - Tivemos alguns problemas na nossa captura de dados das pessoas estudantes e esses dados estão desordenados, precisamos que eles estejam ordenados por status.

const ordemCrescente = estudantes.sort((a, b) => a.status - b.status);
console.table(ordemCrescente);