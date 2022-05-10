import React from 'react'
//import imagen1 from './assets/img/img3.jpg'
import imagenes from './assets/imagenes';

function App() {  
  return (
    <div>
      { /* <img src={imagenes.imagen3} /> */ }
      { /* <img src={imagenes[1]} /> */ }
      <h1>{imagenes[2].title}</h1>
      <img src={imagenes[2].imagen} />
    </div>
    
  );
}

export default App;
