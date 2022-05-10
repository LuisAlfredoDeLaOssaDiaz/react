import React, { Children } from 'react'

export const texto = <>
  <h1>Hola mundo, const texto  </h1>
</>

const Prueba = props => <>
  <h1>
    Prueba 
    {texto}
    {props.title}
    {props.children}
  </h1>
</>

// const Prueba = ({title}) => <>
//   <h1>
//     Prueba 
//     {texto}{title}
//   </h1>
// </>

export default Prueba;
