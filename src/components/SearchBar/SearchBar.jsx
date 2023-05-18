import { useState } from "react";
import style from "./SearchBar.module.css"


const SearchBar = ({onSearch}) => {
   const [id, setId] = useState("")
   const hundleChange = (event) => {
      setId(event.target.value)
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
      Agregar
      </button>
   </div>
   );
}







export default SearchBar;


