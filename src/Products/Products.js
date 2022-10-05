import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Frind from '../Frind/Frind';
import './Products.css'
//import Header from '../Header/Header';

const Products = () => {
    const products=useLoaderData()

    return (
        <div className='products'>
           
            <h1>This is a products page:{products.length}</h1>
            {
                products.map(frind=> <Frind   key={frind.id} frind={frind}></Frind>)
            }
        </div>
    );
};

export default Products;