import { useState } from "react";
import style from "./SearchBar.module.css"
import React from 'react';


const SearchBar = ({onSearch}, props) => {

const [id, setId] = useState("")

const hundleChange = (event) => {
      setId(event.target.value)
   };

   const handleRandomClick = () => {
      const randomNumber = Math.floor(Math.random() * 826) + 1;
      onSearch(randomNumber);
   }


   return ( 
      <div className={SearchBar}>
      <input 
      className={style.busqueda}
      type='search' 
      onChange={hundleChange} />

      <button 
      className={style.button}
      onClick= {() => onSearch (id)} > 
      ADD
      </button>

      <button 
      className={style.button} 
      type='button' 
      onClick={handleRandomClick}>
         RANDOM
         </button>
   </div>

   );
}







export default SearchBar;


