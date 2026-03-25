import {useEffect,useState} from "react";
import API from "../services/api";
import {useParams} from "react-router-dom";

function Profile(){

const {id} = useParams();
const [user,setUser] = useState({});
const [cursos,setCursos] = useState([]);

useEffect(()=>{

API.get(`/usuarios/${id}`)
.then(res=>setUser(res.data));

API.get(`/usuarios/${id}/cursos`)
.then(res=>setCursos(res.data));

},[]);

return(
<div>

<h2>{user.nombres}</h2>

<h3>Cursos aprobados</h3>

{
cursos.map(c=>(
<p key={c.id}>{c.nombre_curso}</p>
))
}

</div>
);
}

export default Profile;