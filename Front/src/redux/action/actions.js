import axios from "axios";
import {
  DELETE_CHARACTER,
  FILTER,
  ORDER,
  GET_FAVORITES,
  CLEAN_DETAIL,
  GET_CHARACTER_DETAIL,
} from "./types";

// export const agregarPersonaje = (character) => {
//   return {
//     type: AGREGAR_PERSONAJE,
//     payload: character,
//   };
// };

export const deleteCharacter = (id) => {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
};

export const filterCards = (status) => {
  return {
    type: FILTER,
    payload: status,
  };
};
export const getCharacterDetail = (id) => {
  return async function (dispatch) {
    const URL_BASE = "http://localhost:3001";
    const response = await axios.get(`${URL_BASE}/detail/${id}`);
    dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};
export const getFavorites = () => {
  return async function (dispatch) {
    const URL_BASE = "http://localhost:3001";
    const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
    dispatch({ type: GET_FAVORITES, payload: response.data });
  };
};
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
