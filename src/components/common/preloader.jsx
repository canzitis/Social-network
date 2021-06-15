import React from "react";
import loadingGIF from "../img/loading-gif2.gif";
import s from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={s.loaderGif}>
      <img src={loadingGIF} alt="" />
    </div>
  );
};

export default Preloader;
