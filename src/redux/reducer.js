import { AGREGAR_PERSONAJE, DELETE_CHARACTER } from "./action/types";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case AGREGAR_PERSONAJE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, actions.payload],
      };

    case DELETE_CHARACTER:
      let filtChar = state.myFavorites.filter(
        (char) => char.id !== actions.payload
      );
      return {
        ...state,
        myFavorites: filtChar,
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
