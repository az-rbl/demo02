import React, {useState} from "react";
import Boton from "../estilos/boton";
import Button from "react-bootstrap/Button";


const FormularioLogin = (props) => {
    const [user, SetUser] =useState("");
    const [password, SetPassword] =useState("");
    const [userR, SetUserR] =useState("Rafa");
    const [passwordR, SetPasswordR] =useState("123");
    const [mayor8, Setmayor8]=useState(false);
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
            if(e.target.value.length>7)
            Setmayor8(true)
        
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
        if(mayor8===true){
            SetPasswordR(password);
            SetUserR(user);}
        else{alert("La contraseña debe tener por lo mentos 8 caracteres")}

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
            {mayor8== true ?(
                <>

                </>
            ):(<>
            <p style={{color:'red'}} >La contraseña debe tener 8 caracteres o más</p>
            </>)}
        </div>
        <Boton>Iniciar sesion</Boton>
        <Button type ="button" onClick={Registrar}>Registrar usuario</Button>
       </form> 
     );
}


export default FormularioLogin;