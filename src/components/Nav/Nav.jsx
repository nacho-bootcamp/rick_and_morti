import React from "react";
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.link}>
        <Link to="/about" className={styles.sublink}>
          About
        </Link>
        <Link to="/home" className={styles.sublink}>
          Home
        </Link>
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};
export default Nav;
