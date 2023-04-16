import Card from "../Card/Card";
import styles from "./Cards.module.css";

const Cards = ({ characters, onClose }) => {
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
