import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Uniqpost = () => {
    const uniqpost=useLoaderData();
   // console.log(uniqpost);
  const navigate=useNavigate();
    const{id,title,body,userId}=uniqpost;
    const handleNavegates=()=>{
        navigate(`/frind/${userId}`)
    }
    return (
        <div>
            <h1>Posts dtails:{id}</h1>
            <h4>{title}</h4>
            <p>{body}</p>
            <button  onClick={ handleNavegates}>Get authour</button>
        </div>
    );
};

export default Uniqpost;