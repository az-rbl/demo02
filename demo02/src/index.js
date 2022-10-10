import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Alumno from './components/alumno'


const root = ReactDOM.createRoot(document.getElementById('root'));
const App = ()=> {
  //sesion =true;
  const[sesion,cambiarSesion]=useState(true);
  // const cambiarSesion=() => {
  //   console.log(sesion);
  //   sesion = false;
  //   console.log(sesion);
  // };
  const[numero,cambiarNumero]=useState(0);
return(
<>
{sesion == true ? (
<>
  <Alumno/>
  <h2>{numero}</h2>
  <button onClick={()=>cambiarSesion(false)}>Cerrar Sesion</button>
  <button onClick={()=>cambiarNumero(numero+1)}>Sumar uno</button>
  <button onClick={()=>cambiarNumero(numero-1)}>Restar uno</button>
  <button onClick={()=>cambiarNumero(numero*2)}>Multiplicar por dos</button>
</>
):(
  <><h2>No has iniciado sesion</h2>
  <button onClick={()=>cambiarSesion(true)}>Iniciar Sesion</button>
  </>
)}
</>
);};



root.render(<App/>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

