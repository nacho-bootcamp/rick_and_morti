import React from "react";
import { connect, useDispatch } from "react-redux";
import styles from "./Favorite.module.css";

import { Link } from "react-router-dom";
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
            <div key={id} className={styles.card}>
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
