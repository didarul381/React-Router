import React from 'react';
import { Link } from 'react-router-dom';
import './Frind.css'
const Frind = ({frind}) => {
    const {id,name,email,username}=frind
    return (
        <div className='frind'>
            <h3>Name:{name}</h3>
            <p>Email:{email}</p>
            <p><small>UserName:<Link to={`/frind/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Frind;