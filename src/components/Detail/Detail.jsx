import React, { useEffect, useState } from 'react';
import Style from './Detail.module.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';


const Detail = () => {

   const {id} = useParams()

   const [character, setCharacter] = useState ({})

   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);



    return ( 
<div className={Style.contain}>
      <div className={Style.detail}>
         <h3 className= {Style.name}>{character.name}</h3>
         <p className= {Style.info}>Status: {character.status}</p>
         <p className= {Style.info}>Species: {character.species}</p>
         <p className= {Style.info}> Gender: {character.gender}</p>
         <p className= {Style.info}> Origin:{character.origin?.name}</p>
      </div>
         <img className= {Style.img} src={character.image} alt="img" />
</div>

     );
}
 
export default Detail;