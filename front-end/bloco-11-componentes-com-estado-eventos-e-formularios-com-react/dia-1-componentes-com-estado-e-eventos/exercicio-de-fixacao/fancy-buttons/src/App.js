import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }
  
  handleClick1() {
    console.log('Botão 1 foi clicado!', this)
  }
  handleClick2() {
    console.log('Botão 2 foi clicado!', this)
  }
  handleClick3() {
    console.log('Botão 3 foi clicado!', this)
  }

  render(){
    return (
      <div>
        <button type="button" onClick={this.handleClick1}>BOTÃO 1</button>
        <button type="button" onClick={this.handleClick2}>BOTÃO 2</button>
        <button type="button" onClick={this.handleClick3}>BOTÃO 3</button>
      </div>
    );
  }
}

export default App;
