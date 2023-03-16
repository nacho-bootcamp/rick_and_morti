import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

const Favorites = (props) => {
  return (
    <div>
      {
        (props.myFavorites.map = ({ id, name, species, gender, image }) => {
          return (
            <Card
              key={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              id={id}
            />
          );
        })
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
