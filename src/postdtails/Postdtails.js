import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Postdtails = ({post}) => {
const{id,userId,title} =post;
const navigate=useNavigate()
const handleNavegate=()=>{
navigate(`/post/${id}`);
}
    return (
        <div>
            <p>id:{title}</p>
            <p>id:{userId}</p>
            <p><small>UserName:<Link to={`/post/${id}`}>{post.id}</Link></small></p>
            <button onClick={handleNavegate}>Show Dtails2</button>
        </div>
    );
};

export default Postdtails;