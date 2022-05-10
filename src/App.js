import React from 'react'
import Prueba, {texto} from './components/prueba/index'

function App() {  

  return (
    <div>
      <Prueba title="Hola pepito pepo" >"Hola mundo children se accede al contenido de prueba con children"</Prueba>
      {texto}
    </div>
    
  );
}

export default App;
