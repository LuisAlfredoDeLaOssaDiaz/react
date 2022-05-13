import React from "react";
import {Cuadrado, Rectangulo, Component, Imput, GlobalStyle} from './styled'

function App() {

  return (
    <div>
      <GlobalStyle />
      <div
        style={{
          backgroundColor: "salmon",
          fontSize: "3rem",
        }}>

        <Cuadrado className="cuadrado" />
        <Rectangulo className="rectangulo" />
        <Component isRight={false}>Wepajé</Component>
        <Imput myMaxLength={2} />
        <h1>HOLA MUNDO</h1>
      </div>
    </div>
  );
}

export default App;
