import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logoComoany from "../img/logoCompany.png";
import searchImg from "../img/search.png";
import userIco from "../img/user-ico.png";

const Header = (props) => {
  const clikLogoutBtn = () => {
    props.logout();
    setTimeout(() => {
      alert("До встречи!");
    }, 700);
  };

  return (
    <header className={s.header}>
      <h3>CatHub</h3>
      <h5>New Social Network</h5>
      <img className={s.logoCompany} src={logoComoany} alt="" />
      <img className={s.searchImg} src={searchImg} alt="" />
      <input className={s.search} type="search" placeholder="Search" />
      <div className={s.login}>
        {props.isAuth ? (
          <div className={s.loginInfoUser}>
            <div className={s.userLogin}>
              <img src={userIco} alt="" />
              {props.login}
            </div>
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
