import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Beber água', 'Respiração Wim-Hof', 'Nadar', 'Comprar sacolas brancas', 'Trabalho em Santa', 'Assistir aula 10.2', 'Jantar', 'Ler', 'Dormir'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map((tarefa) => Task(tarefa)) }</ul>
    );
  };
}

export default App;
