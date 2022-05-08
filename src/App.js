import {useState, useEffect, useRef} from 'react'


function App() {  

  const [a, setA] = useState(0);
  const [text, setText] = useState('');
  
  const hacerCosas = _ => {
    const a = 1;
    setA(a);
  }

  useEffect( _ => {
      alert(a)
  }, [a])
  
  const textChange = (event) => {
    setText(event.target.value)
    console.log('Luis Está Escribiendo...')
  }

  return (
    <div>
      
      {`${a}`}

      <button onClick={ _ => {hacerCosas()} }>Pulsame</button>

      <input type="text" onChange={ event => textChange(event) } />
      {text}

    </div>
    
  );
}

export default App;
