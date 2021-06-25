import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  const clikLogoutBtn = () => {
    props.logout();
    setTimeout(() => {
      alert("До встречи!");
    }, 700);
  };

  return (
    <header className={s.header}>
      <img
        src="https://p7.hiclipart.com/preview/359/743/635/logo-clip-art-community.jpg"
        alt=""
      />
      <div className={s.login}>
        {props.isAuth ? (
          <div className={s.loginInfoUser}>
            {props.login}
            <button onClick={clikLogoutBtn} className={s.buttonExitLogin}>
              Log out
            </button>
          </div>
        ) : (
          <button onClick={props.login} className={s.buttonLogin}>
            <NavLink to={"/login"}>Login</NavLink>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
