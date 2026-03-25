import {useNavigate} from "react-router-dom";

function PostCard({post}){

const navigate = useNavigate();

return(
<div style={{border:"1px solid gray", margin:"10px"}}>

<h4>{post.nombres}</h4>
<p>{post.mensaje}</p>

<button onClick={()=>navigate(`/profile/${post.id_usuario}`)}>
Ver perfil
</button>

</div>
);
}

export default PostCard;