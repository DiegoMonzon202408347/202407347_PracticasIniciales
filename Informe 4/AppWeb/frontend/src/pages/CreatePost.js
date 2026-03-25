import {useState} from "react";
import API from "../services/api";

function CreatePost(){

const [mensaje,setMensaje] = useState("");

const user = JSON.parse(localStorage.getItem("user"));

const crear = async () => {

await API.post("/publicaciones/crear",{
  id_usuario: user.id_usuario,
  id_curso: null,
  id_catedratico: null,
  mensaje
});

alert("Publicación creada");

};

return(
<div>

<h2>Nueva publicación</h2>

<textarea
onChange={e=>setMensaje(e.target.value)}
/>

<button onClick={crear}>
Publicar
</button>

</div>
);
}

export default CreatePost;