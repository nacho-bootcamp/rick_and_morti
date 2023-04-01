import {
  AGREGAR_PERSONAJE,
  DELETE_CHARACTER,
  FILTER,
  ORDER,
  GET_FAVORITES,
  CLEAN_DETAIL,
  GET_CHARACTER_DETAIL,
} from "./action/types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  characterDetail: {},
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case AGREGAR_PERSONAJE:
      return {
        ...state,
        myFavorites: [...state.allCharacters, actions.payload],
        allCharacters: [...state.allCharacters, actions.payload],
      };

    case DELETE_CHARACTER:
      let filtChar = state.myFavorites.filter(
        (char) => char.id !== actions.payload
      );
      return {
        ...state,
        myFavorites: filtChar,
      };

    case FILTER:
      const allCharactersFilt = state.allCharacters.filter(
        (chara) => chara.gender === actions.payload
      );
      return {
        ...state,
        myFavorites: [allCharactersFilt],
      };

    case ORDER:
      return {
        ...state,
        myFavorites:
          actions.payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : [...state.allCharacters].sort((a, b) => b.id - a.id),
      };
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: actions.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };

    case GET_FAVORITES:
      return { ...state, myFavorites: actions.payload };

    default:
      return { ...state };
  }
};
export default rootReducer;
