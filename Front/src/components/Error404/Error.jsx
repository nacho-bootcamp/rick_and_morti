import React from "react";
import { Link } from "react-router-dom";
import style from "./Error.module.css";

const Error = () => {
  return (
    <div className={style.frem}>
      <p>404</p>
      <h2>Look like you re lost</h2>
      <h5>the page you page looking for not available</h5>
      <Link to={"/home"}>Go to Home</Link>
    </div>
  );
};

export default Error;
