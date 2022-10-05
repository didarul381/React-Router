import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Frinddatils = () => {
    const frindD=useLoaderData();
    // console.log(frindD);
    const {name,email,phone}=frindD
    return (
        <div>
            <h1>Every thing is good</h1>
             <h5>{name}</h5> 
             <p>{phone}</p>
        </div>
    );
};

export default Frinddatils;