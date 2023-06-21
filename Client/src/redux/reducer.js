import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

export const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
    // me tengo que fijar que el personaje no tenga el id
    //igual a lo que voy a recibir por action.type
    case FILTER:
      const filterByGender = [
        ...state.allCharacters.filter((char) => char.gender === action.payload),
      ];
      return {
        ...state,
        myFavorites: filterByGender,
      };
    case ORDER:
      const filterByOrder = [...state.allCharacters].sort((a, b) => {
        if (action.payload === "Ascendente") {
          return a.id > b.id ? 1 : -1;
        } else {
          return a.id < b.id ? 1 : -1;
        }
      });
      return {
        ...state,
        myFavorites: filterByOrder,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
