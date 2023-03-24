import { AGREGAR_PERSONAJE, DELETE_CHARACTER, FILTER, ORDER } from "./types";

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

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};
