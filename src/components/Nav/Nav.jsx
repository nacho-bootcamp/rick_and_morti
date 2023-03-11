import React from "react";
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={styles.nav}>
      <Link to="/about" className={styles.link}>
        About
      </Link>
      <SearchBar onSearch={onSearch} />
      <Link to="/home" className={styles.link}>
        Home
      </Link>
    </div>
  );
};
export default Nav;
