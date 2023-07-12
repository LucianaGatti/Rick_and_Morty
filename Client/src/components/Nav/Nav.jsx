import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import Style from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div>
      <nav className={Style.nav}>
        <Link to="/home">
          <button className={Style.home}> </button>
        </Link>

        <div className={Style.rightButtons}>
          <Link to="/about">
            <button className={Style.about}>ABOUT</button>
          </Link>

          <Link to="/favorites">
            <button className={Style.favorites}>❤️</button>
          </Link>

          <Link to="/">
            <button className={Style.logOut}></button>
          </Link>
        </div>
      </nav>
      <nav>
        {" "}
        
          <img className={Style.img} src="Rick_and_Morty.svg.png" alt="" />
        <div>
        <SearchBar onSearch={props.onSearch} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
