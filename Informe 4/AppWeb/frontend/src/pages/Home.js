import {useEffect,useState} from "react";
import API from "../services/api";
import PostCard from "../components/PostCard";
import {useNavigate} from "react-router-dom";

function Home(){

const [posts,setPosts] = useState([]);
const navigate = useNavigate();

useEffect(()=>{
  API.get("/publicaciones")
  .then(res=>setPosts(res.data));
},[]);

return(
<div>

<h2>Publicaciones</h2>

<button onClick={()=>navigate("/create")}>
Crear publicación
</button>

{
posts.map(p=>(
<PostCard key={p.id_publicacion} post={p}/>
))
}

</div>
);
}

export default Home;