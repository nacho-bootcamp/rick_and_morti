import React from "react";
import style from "./Loading.module.css";

const Loading = () => {
  return (
    <div class={style.skflow}>
      <div class={style.skflowdot}></div>
      <div class={style.skflowdot}></div>
      <div class={style.skflowdot}></div>
    </div>
  );
};
export default Loading;
