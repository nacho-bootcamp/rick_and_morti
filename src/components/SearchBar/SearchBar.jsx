import { useState } from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [character, setCharacter] = useState("");

  const handlerChange = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <div className={style.box}>
      <input type="search" value={character} onChange={handlerChange} />
      <button onClick={() => onSearch(character)}>Agregar</button>
    </div>
  );
};
export default SearchBar;
