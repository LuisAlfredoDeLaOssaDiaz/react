import {useState, useEffect, useRef} from 'react'


function App() {  

  const [a, setA] = useState(8);
  const [text, setText] = useState('');
  
  const hacerCosas = _ => {
    const a = 4
    setA(a)
    console.log(a)
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
