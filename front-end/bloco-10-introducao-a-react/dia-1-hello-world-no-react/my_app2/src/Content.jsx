import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className='content'>
        {conteudos.map((elem) => (
          <div key={elem.conteudo}>
            <h3>O Conteúdo é: {elem.conteudo}</h3>
            <p>Bloco: {elem.bloco}</p>
            <p>Status: {elem.status};</p>
          </div>
        ))};
      </div>
    );
  };
};

export default Content;
