import React from "react";
import { connect, useDispatch } from "react-redux";
import styles from "./Favorite.module.css";

import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/action/actions";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div>
        <select onChange={handlerOrder}>
          <option value="order" disabled="disable">
            Order by
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="filter" disabled="disable">
            Filter by
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
      <div className={styles.container}>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
