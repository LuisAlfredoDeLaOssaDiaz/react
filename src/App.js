import {useRef} from 'react'

function App() {

  const inputRef = useRef(null);
  const resultRef = useRef(null);

  const makeThings = _ => {
    //alert(inputRef.current.value);
    console.log(inputRef.current.value);
    resultRef.current.innerHTML = inputRef.current.value
  }
  
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={makeThings}>hacer cosas</button>
      <div ref={resultRef} >
      </div>
    </div>
    
  );
}

export default App;
