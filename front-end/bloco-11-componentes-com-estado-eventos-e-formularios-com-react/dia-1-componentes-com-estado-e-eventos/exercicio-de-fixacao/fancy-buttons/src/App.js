import React from 'react';
import './App.css';

const handleClick1 = () => console.log('Botão 1 foi clicado!')
const handleClick2 = () => console.log('Botão 2 foi clicado!')
const handleClick3 = () => console.log('Botão 3 foi clicado!')

class App extends React.Component {
  render(){
    return (
      <div>
        <button onClick={handleClick1}>BOTÃO 1</button>
        <button onClick={handleClick2}>BOTÃO 2</button>
        <button onClick={handleClick3}>BOTÃO 3</button>
      </div>
    );
  }
}

export default App;
