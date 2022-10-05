import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Main from './Layouts/Main';

const Apps = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                {/* <Route path='/' element={<Main></Main>}></Route> */}
                <Route path='/home' element={<Home></Home>}></Route>
            </Routes>
        </div>
    );
};

export default Apps;