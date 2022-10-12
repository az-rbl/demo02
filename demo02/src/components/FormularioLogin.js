import React, {useState} from "react";



const FormularioLogin = (props) => {
    const [user, SetUser] =useState("");
    const [password, SetPassword] =useState("");
    const Change =(e)=>{
        if(e.target.name ==="user"){
        console.log(e.target.value);
        SetUser(e.target.value);
        
    }
        else if(e.target.name === "password"){
            SetPassword(e.target.value)
        
        }
            };
    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if(user==="Rafa" && password ==="123"){
            alert("correcto")
            props.validar(true);
        }
            else
            {alert("incorrecto")
        }
    }
    return ( 
        <form action="" onSubmit={onSubmit}>
           <p>Usuario:{user}</p>
           <p>Contraseña:{password}</p>
        <div>
            <label htmlFor="user">Usuario</label>
            <input type="text" name ="user" id = "user"
            value={user}
            onChange={Change}
            />
        </div>
        <div>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name ="password" id = "password"
            value={password}
            onChange={Change}
            />
        </div>
        <button>Iniciar sesion</button>
       </form> 
     );
}


export default FormularioLogin;