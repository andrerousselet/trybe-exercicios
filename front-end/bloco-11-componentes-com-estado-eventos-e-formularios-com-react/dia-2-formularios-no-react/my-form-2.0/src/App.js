import React from 'react';
import './App.css';
import Header from './Components/Header'
import TextLable from './Components/TextLable';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
    }
  }

  handleChange = (event) => {
    let { name, value } = event.target
    if (name === "nome") value = value.toUpperCase();
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { nome, email, cpf, endereço, cidade } = this.state;
    return (
      <div>
        <Header />
        <form>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <TextLable
              type="text"
              name="nome"
              value={nome}
              maxLength={40}
              onChange={this.handleChange}
            />
            <TextLable
              type="text"
              name="email"
              value={email}
              maxLength={50}
              onChange={this.handleChange}
            />
            <TextLable
              type="text"
              name="cpf"
              value={cpf}
              maxLength={11}
              onChange={this.handleChange}
            />
            <TextLable
              type="text"
              name="endereço"
              value={endereço}
              maxLength={200}
              onChange={this.handleChange}
            />
            <TextLable
              type="text"
              name="cidade"
              value={cidade}
              maxLength={28}
              onChange={this.handleChange}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default App;
