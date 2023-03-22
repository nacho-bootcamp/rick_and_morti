import React from "react";
import { connect } from "react-redux";
import styles from "./Favorite.module.css";

import Card from "../Card/Card";

const Favorites = ({ myFavorites }) => {
  return (
    <div>
      {myFavorites.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            className={styles.card}
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            id={id}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
