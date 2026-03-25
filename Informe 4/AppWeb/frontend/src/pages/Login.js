import {useState} from "react";
import API from "../services/api";
import {useNavigate} from "react-router-dom";

function Login(){

const [correo,setCorreo] = useState("");
const [password,setPassword] = useState("");
const navigate = useNavigate();

const login = async () => {
  const res = await API.post("/usuarios/login", {
    correo,
    contraseña: password
  });

  if(res.data.id_usuario){
    localStorage.setItem("user", JSON.stringify(res.data));
    navigate("/home");
  }else{
    alert("Credenciales incorrectas");
  }
};

return(
<div>
<h2>Login</h2>

<input placeholder="Correo"
onChange={e=>setCorreo(e.target.value)}/>

<input type="password"
placeholder="Contraseña"
onChange={e=>setPassword(e.target.value)}/>

<button onClick={login}>Ingresar</button>

<p onClick={()=>navigate("/register")}>Registrarse</p>

</div>
);
}

export default Login;