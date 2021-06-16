import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://p7.hiclipart.com/preview/359/743/635/logo-clip-art-community.jpg"
        alt=""
      />
      <div className={s.login}>
        {props.isAuth ? (
          <div>{props.login}</div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
