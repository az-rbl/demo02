import React from "react";
import {TituloRojo,TituloVerde} from "./titulo"

const Alumno = () =>{
    const name = 'Raúl'
const sesion = true;
const  apellido = ''
const alumnos =["juan", "pedro", "aldo"]
    return(
      <>
      <TituloVerde alumno ="Yoli" matricula="1234" color = "purple"/>
      <TituloRojo/>
        {sesion === true ?(
    <>
  
  {apellido && <p>tu apellido es : {apellido}</p>}
  <h3>Lista de alumnos</h3>
  <ul>
    {alumnos.map((nombre,i)=>{return<li key ={i}>{nombre}</li>})}
  </ul>
  </>
  ):(<h2>NO has iniciado sesion</h2>)}
      </>
    ) 
  };

export default Alumno;