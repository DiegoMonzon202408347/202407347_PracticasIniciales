import {useState} from "react";
import API from "../services/api";
import {useNavigate} from "react-router-dom";

function Register(){

const [form,setForm] = useState({});
const navigate = useNavigate();

const register = async () => {
  await API.post("/usuarios/registro", form);
  alert("Registrado correctamente");
  navigate("/");
};

return(
<div>
<h2>Registro</h2>

<input placeholder="Registro Académico"
onChange={e=>setForm({...form,registro_academico:e.target.value})}/>

<input placeholder="Nombres"
onChange={e=>setForm({...form,nombres:e.target.value})}/>

<input placeholder="Apellidos"
onChange={e=>setForm({...form,apellidos:e.target.value})}/>

<input placeholder="Correo"
onChange={e=>setForm({...form,correo:e.target.value})}/>

<input type="password"
placeholder="Contraseña"
onChange={e=>setForm({...form,contraseña:e.target.value})}/>

<button onClick={register}>Registrar</button>

</div>
);
}

export default Register;