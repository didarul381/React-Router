import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
            <Link to='/post'>Post</Link> */}
              <NavLink to="/home">Home</NavLink> 
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/post'>Post</NavLink>
            </nav>
        </div>
    );
};

export default Header;