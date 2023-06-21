import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import Style from "./Favorites.module.css";


const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const [aux, setAux] = useState(false)
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    setAux(!aux)
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
    setAux(!aux)
  }

  return (
  <div className={Style.div}>
      <div>
        <select name="order" onChange={handleOrder} className={Style.Select}>
          <option className={Style.option} value="Ascendente">Ascendente</option>
          <option className={Style.option} value="Descendente">Descendente</option>
        </select>
        <select name="filter" onChange={handleFilter} className={Style.Select}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={Style.divCard}>
      {favorites.map(({ name, status, species, gender, origin, image, id}) => {
        return (
          <Card
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            id={id}
          />
        );
      })}
    </div>
  </div>
  );
};


export default Favorites;
