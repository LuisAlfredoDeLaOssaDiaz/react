import React from 'react'

function App() {  
  const condicion = false;
  return (
    <div>
      { condicion && <h1>Hola</h1> } {/*SI CONDICION EXISTE O ES TRUE, IMPRIMIR HOLA*/}
      { condicion ? <h1>Hola</h1> : <h1>Adios</h1> } {/*SI CONDICION EXISTE O ES TRUE IMPRIMIR HOLA, SI ES FALSO IMPRIMIR ADIOS*/}
    </div>
    
  );
}

export default App;
