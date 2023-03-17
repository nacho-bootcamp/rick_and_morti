import { AGREGAR_PERSONAJE, DELETE_CHARACTER, FILTER } from "./types";

export const agregarPersonaje = (character) => {
  return {
    type: AGREGAR_PERSONAJE,
    payload: character,
  };
};

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
