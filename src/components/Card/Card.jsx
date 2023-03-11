import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ id, name, species, gender, image, onClose }) => {
  return (
    <div className={styles.card}>
      <div className={styles.containerBtn}>
        <button className={styles.boton} onClick={onClose}>
          X
        </button>
      </div>
      <img className={styles.img} src={image} alt={name} />
      <div className={styles.info}>
        <Link className={styles.link} to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
};
export default Card;
