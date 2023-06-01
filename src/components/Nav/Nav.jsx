import React from 'react';
import SearchBar from "../SearchBar/SearchBar"
import { Link } from 'react-router-dom';
import Style from './Nav.module.css'



const Nav = (props) => {
    return ( 
        <div>

        <nav className={Style.nav} >

            <Link to="/home">
                <button className={Style.home}>  </button>
            </Link>

            <Link to="/about">
                <button className={Style.about}>ABOUT</button>
            </Link>
            <Link to="/favorites">
                <button className={Style.favorites}>MY ❤️</button>
            </Link>
            <SearchBar onSearch={props.onSearch} />

            <Link to="/">
                <button className={Style.logOut}></button>
            </Link>






        </nav>
        

        </div>
    
     );
}
 
export default Nav;