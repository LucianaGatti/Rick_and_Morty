import Card from "../Card/Card";
import style from "./Cards.module.css";


export default function Cards( {characters, onClose} ) {
  return (
  <>
  <div>
    <img className={style.img} src='Rick_and_Morty.svg.png'alt=''/>
    </div>

    <div className={style.div}>
      {characters.map(({name, status, species, gender, origin, image, id}) => {
        return (
          <Card
            name= {name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
            id={id}
          />
        );
      })}
    </div>
    </>
  );
}
