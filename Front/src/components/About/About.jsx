import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.container}>
      <img className={style.img} src="" alt="" />
      <div className={style.detail}>
        <h1>Nombre: IGNACIO</h1>
        <h2>Especie: Sayayin </h2>
        <h2>Genero: Masculino </h2>
        <h2>Origin: Planeta Vegeta </h2>
      </div>
    </div>
  );
}
