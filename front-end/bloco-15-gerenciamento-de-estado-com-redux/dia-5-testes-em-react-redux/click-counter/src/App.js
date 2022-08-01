import './App.css';
import ButtonClicks from './components/ButtonClicks';
import NumberClicks from './components/NumberClicks';

function App() {
  return (
    <div className="App">
      <h1>Contador de cliques</h1>
      <ButtonClicks />
      <NumberClicks />
    </div>
  );
}

export default App;
