import React, { useEffect } from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState } from "react";
import { connect } from "react-redux";

function Card({
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  id,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        name,
        status,
        species,
        gender,
        origin,
        image,
        id,
        onClose,
      });
    }
  };

  return (
    <div className={style.div}>
      <div>
        {isFav ? (
          <button className={style.fav} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.fav} onClick={handleFavorite}>
            🤍
          </button>
        )}
        {isFav ? null : (
          <button className={style.button} onClick={() => onClose(id)}>
            X
          </button>
        )}
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

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
