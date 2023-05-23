import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  id,
}) {
  return (
    <div className={style.div}>
      <div>

        <button className={style.button} onClick={() => onClose(id)}>
          X
        </button>
      </div>
      <img className={style.img} src={image} alt="" />
      <div>
        
        <Link to={`/detail/${id}`}>
        <h2 className={style.name}> Name: {name}</h2>
        </Link>
        <h2 className={style.h2}> Id: {id}</h2>
        <h2 className={style.h2}> Status: {status}</h2>
        <h2 className={style.h2}> Species: {species}</h2>
        <h2 className={style.h2}> Gender: {gender}</h2>
        <h2 className={style.h2}> Origin: {origin}</h2>
      </div>
    </div>
  );
}
