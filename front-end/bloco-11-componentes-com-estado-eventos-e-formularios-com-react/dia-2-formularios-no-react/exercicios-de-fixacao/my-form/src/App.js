import React from 'react';
import Title from './Title';
import Label from './Label';
import "./styles.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      estadoFavorito: '',
      nome: '',
      idade: 0,
      email: '',
      vaiComparecer: false,
      palavraChaveFavorita: '',
    }
  }

  handleChange = (event) => {
    const {name} = event.target
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {estadoFavorito, nome, idade, vaiComparecer, email, palavraChaveFavorita} = this.state;
    return (
      <div>
        <Title />
        <form className="form">
          <label className="textarea">
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea
                name="estadoFavorito"
                value={estadoFavorito}
                onChange={this.handleChange}
              />
          </label>
          <Label
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
          />
          <Label
            type="text"
            name="nome"
            value={nome}
            handleChange={this.handleChange}
          />
          <Label
            type="number"
            name="idade"
            value={idade}
            handleChange={this.handleChange}
          />
          <fieldset>
            <legend>teste de legenda</legend>
            <label>
              Vai comparecerr?
              <input
                type="checkbox"
                name="vaiComparecer"
                value={vaiComparecer}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Palavra chave favorita:
              <select 
                className="dropdown-favorite"
                name="palavraChaveFavorita"
                value={palavraChaveFavorita}
                onChange={this.handleChange}
              >
                <option>Selecione</option>
                <option>Vasco</option>
                <option>Tottenham</option>
                <option>Kislimu</option>
                <option>Blá blá blá</option>
              </select>
            </label>
          </fieldset>
          <label>
            Faça upload do seu arquivo:
            <input type="file" />
          </label>
        </form>
      </div>
    );
  }
}

export default App;
