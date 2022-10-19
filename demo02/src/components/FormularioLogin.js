import React, {useState} from "react";
import Boton from "../estilos/boton";
import Button from "react-bootstrap/Button";


const FormularioLogin = (props) => {
    const [user, SetUser] =useState("");
    const [password, SetPassword] =useState("");
    const [userR, SetUserR] =useState("Rafa");
    const [passwordR, SetPasswordR] =useState("123");
    const ChangeR =(e)=>{
        SetPasswordR(password)
        SetUserR(user)
    }
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
        if(user===userR && password ===passwordR){
            alert("correcto")
            props.validar(true);
        }
            else
            {alert("incorrecto")
        }
    }

    const Registrar= (e) =>{
        if(password>8){
            SetPasswordR(password);
            SetUserR(user);}
        else{alert("menor que 8")}

    }

    return ( 
        <form action="" onSubmit={onSubmit}>
            <p>UsuarioR:{userR}</p>
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
        <Boton>Iniciar sesion</Boton>
        <Button type ="button" onClick={Registrar}>Registrar usuario</Button>
       </form> 
     );
}


export default FormularioLogin;