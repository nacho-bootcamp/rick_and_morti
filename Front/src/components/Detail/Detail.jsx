import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

const Detail = () => {
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const KEY = "831c4597aaa4.c1c7bf7f3200751b57bf ";

  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`${URL_BASE}/character/${detailId}?key=${KEY}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  return (
    <div>
      {character.name ? (
        <>
          <div className={style.container}>
            <img
              className={style.img}
              src={character?.image}
              alt={character.name}
            />
            <div className={style.detail}>
              <h1>Nombre: {character?.name}</h1>
              <h2> Status: {character?.status}</h2>
              <h2> Especie: {character?.species}</h2>
              <h2>Genero: {character?.gender}</h2>
              <h2>Origin: {character?.origin?.name}</h2>
            </div>
          </div>
        </>
      ) : (
        <h3>Loading ...</h3>
      )}
    </div>
  );
};
export default Detail;
