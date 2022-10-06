import React from 'react';

const TituloRojo = ()=>{
    const name = 'Raúl';
    return(
        <>
        <h1 className='titulo' style={{color:'red', fontSize:'4rem'}}>Hola {name}</h1>
        </>
    );
};

const TituloVerde = ({alumno, matricula, color})=>{
    const name = 'Raúl';
    return(
        <>
        <h1 className='titulo' style={{color:color, fontSize:'4rem'}}>Hola {alumno} con matricula {matricula}</h1>
        </>
    );
};

export {TituloRojo, TituloVerde};
