import React from 'react';
import './Form.css';
import Header from './Components/Header'
import TextLabel from './Components/TextLabel';

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
      disabled: true,
    }
  }

  handleChange = (event) => {
    let { name, value } = event.target
    if (name === 'nome') value = value.toUpperCase();

    const {nome, email, cpf, endereço, cidade, estado} = this.state;

    const errors = [
      nome.length !== 0,
      email.length !== 0,
      cpf.length !== 0,
      endereço.length !== 0,
      cidade.length !== 0,
      estado !== '',
    ]

    const isDisabled = errors.every(error => error === true);

    this.setState({
      [name]: value,
      disabled: !isDisabled,
    })
  }

  render() {
    const { nome, email, cpf, endereço, cidade, disabled } = this.state;
    const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal', 'Santa Catarina', 'Paraná', 'Rio Grande do Sul', 'Rio Grande do Norte', 'Pernambuco'];
    return (
      <div>
        <Header />
        <form>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <TextLabel
              type="text"
              name="nome"
              value={nome}
              maxLength={40}
              onChange={this.handleChange}
            />
            <TextLabel
              type="text"
              name="email"
              value={email}
              maxLength={50}
              onChange={this.handleChange}
            />
            <TextLabel
              type="text"
              name="cpf"
              value={cpf}
              maxLength={11}
              onChange={this.handleChange}
            />
            <TextLabel
              type="text"
              name="endereço"
              value={endereço}
              maxLength={200}
              onChange={this.handleChange}
            />
            <TextLabel
              type="text"
              name="cidade"
              value={cidade}
              maxLength={28}
              onChange={this.handleChange}
            />
            <label className="form-labels">
              Estado:
              <select
                name="estado" 
                onChange={this.handleChange}
                required
              >
                <option value="">Selecione</option>
                {states.map(state => <option>{state}</option>)}
              </select>
            </label>
          </fieldset>
          <button
            type="button"
            onClick={this.handleClick}
            disabled={disabled}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
