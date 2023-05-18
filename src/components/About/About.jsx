import React from 'react';
import Style from './About.module.css'



const About = () => {
    return ( 
        <div className={Style.div}>
        <h1> ACERCA DE ...</h1>
        <h2>Que es esta pagina?</h2>
        <p>
          Esta API está inspirada en la serie de tv Rick and Morty. Vas a tener
          acceso a cientos de personajes, con sus imágenes, ficha técnica y mucha
          info mas para que puedas sumergirte en el mundo de Rick and Morty.
        </p>
        <h2>Quien eres?</h2>
        <p>
          Mi nombre es Luciana Gatti, me encuentro estudiando la carrera de Full
          Stack en Henry y este proyecto es parte del aprendizaje del BootCamp
        </p>
      </div>
     );
}
 
export default About;