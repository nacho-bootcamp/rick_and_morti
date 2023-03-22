import React, { useState } from "react";
import Validation from "./validation";
import style from "./Form.module.css";

export const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      Validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.container}>
      <div className={style.box}>
        <form className={style.form} onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <div className={style.inputBox}>
            <input
              required="required"
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
            />
            <label htmlFor="username"> Username:</label>
            <i></i>
          </div>
          {errors.username && <p style={{ color: "red" }} >{errors.username}</p>}
          <div className={style.inputBox}>
            <input
              required="required"
              type="text"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Password:</label>
            <i></i>
          </div>
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          <button className={style.button}>ENVIAR</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
