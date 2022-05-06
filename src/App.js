import logo from './logo.svg';
import './App.css';

const miConstante = <>
  HOLA MUNDO
</> ;

const multiplicar = (a,b) => a+b;

const btnPulsado = () => alert('boton pulsado');


function App() {
  const valores = ['aaaaaaaaa','bbbbbbbbb','ccccccccc']
  const elements = ['one', 'two', 'three'];
  const items = []


  for (const [index, value] of elements.entries()) {
  items.push(<li key={index}>{value}</li>)
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <div className='nombre'>
        <h1>{2+2}</h1>
        <h1>{multiplicar(3,5)}</h1>
      {miConstante}

      <div>
        <button onClick={btnPulsado}>BOTON</button>
      </div>
      
      {
        valores.map(element => <p>{element}</p>)
      }
      <div>
        {items}
      </div>

      </div>
      </header>
    </div>
  );
}

export default App;
