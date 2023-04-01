import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/action/actions";
import { useEffect } from "react";

const Cards = ({ characters, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);
  return (
    <div className={styles.container}>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            className={styles.card}
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            id={id}
            onClose={() => onClose(id)}
          />
        );
      })}
    </div>
  );
};
export default Cards;
