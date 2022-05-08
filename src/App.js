import React from 'react'
import Prueba, {texto} from './components/prueba/index'

function App() {  

  return (
    <div>
      <Prueba title="Hola pepito pepo" />
      {texto}
    </div>
    
  );
}

export default App;
