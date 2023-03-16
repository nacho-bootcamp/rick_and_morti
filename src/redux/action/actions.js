import { AGREGAR_PERSONAJE, DELETE_CHARACTER } from "./types";

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
