import React from 'react';
const Lista = () =>{
    const alumn =["juan", "pedro", "aldo"]
    return(<>
        <h3>Lista de alumnos</h3>
        <ul>
            {alumn.map((nombre, i) => { return <li key={i}>{nombre}</li>; })}
        </ul>
    </>
    );
};
export{Lista}