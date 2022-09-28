import React from 'react';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'));
const name = 'Raúl'
const sesion = true;
const  apellido = ''
const alumnos =["juan", "pedro", "aldo"]
const jsx =(<>
{sesion === true ?(
  <>
<h1 className='titulo' style={{color:'red', fontSize:'4rem'}}>Hola {name}</h1>
{apellido && <p>tu apellido es : {apellido}</p>}
<h3>Lista de alumnos</h3>
<ul>
  {alumnos.map((nombre,i)=>{return<li key ={i}>{nombre}</li>})}
</ul>
</>
):(<h2>NO has iniciado sesion</h2>)}
</>
);    



// const compruebaSesion = (sesion) => {
//   if (sesion ===  true){return jsx}
//   else{
//     return <h2>NO has iniciado sesion</h2>
//   }
// }
// root.render(compruebaSesion(sesion));



root.render(jsx);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

