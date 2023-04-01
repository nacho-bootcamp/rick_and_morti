import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./Card.module.css";
import { connect, useDispatch } from "react-redux";
import { deleteCharacter, getFavorites } from "../../redux/action/actions";
import axios from "axios";

const Card = ({ id, name, species, gender, image, onClose, myFavorites }) => {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const agregarPersonaje = (character) => {
    axios
      .post("http://localhost:3001/rickandmorty/fav", character)
      .then((res) => console.log("todo salio bien"));
  };
  const deleteCharacter = async (id) => {
    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    dispatch(getFavorites());
    alert("Eliminado con éxito");
  };

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteCharacter(id);
    } else {
      setIsFav(true);
      agregarPersonaje({
        id,
        name,
        species,
        gender,
        image,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.card}>
      <div className={styles.containerBtn}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
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
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //agregarPersonaje: (character) => dispatch(agregarPersonaje(character)),
    deleteCharacter: (id) => dispatch(deleteCharacter(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
