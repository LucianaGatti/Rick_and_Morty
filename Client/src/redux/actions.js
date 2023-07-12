import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";


//! express ADDFAV
// export const addFav = (character) => {
//     const endpoint = 'http://localhost:3001/rickandmorty/fav';
//     return (dispatch) => {
//        axios.post(endpoint, character).then(({ data }) => {
//           return dispatch({
//              type: 'ADD_FAV',
//              payload: data,
//           });
//        });
//     };
//  };

//! HOMEWORK ASYNC / AWAIT ADDFAV
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      return error;
    }
  };
};

//! express REMOVE FAV
// export const removeFav = (id) => {
//    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//    return (dispatch) => {
//      axios.delete(endpoint).then(({ data }) => {
//        return dispatch({
//          type: "REMOVE_FAV",
//          payload: data,
//        });
//      });
//    };
//  };


//! HOMEWORK ASYNC / AWAIT REMOVE FAV
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      return error;
    }
  };
};

export const filterCards = (gender) => {
  if (gender === "All") {
    return {
      type: FILTER,
      payload: ["Male", "Female", "Genderless", "unknown"],
    };
  } else {
    return {
      type: FILTER,
      payload: gender,
    };
  }
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
