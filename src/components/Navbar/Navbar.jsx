import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import userListImg from "../img//user-list.png";
import settingsListImg from "../img/settings-list.png";
import profileListImg from "../img/profile-list.png";
import messagesListImg from "../img/message-list.png";
import newsListNavlink from "../img/news-list.png";
import musicListImg from "../img/music-list.png";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <div className={s.itemBlocA}>
          <div className={s.itemNavLink}>
            <img src={profileListImg} alt="" />
            <NavLink to="/profile" activeClassName={s.activeLink}>
              Profile
            </NavLink>
          </div>
          <div className={s.itemNavLink}>
            <img src={messagesListImg} alt="" />
            <NavLink to="/dialogs" activeClassName={s.activeLink}>
              Messages
            </NavLink>
          </div>
          <div className={s.itemNavLink}>
            <img src={userListImg} alt="" />
            <NavLink to="/users" activeClassName={s.activeLink}>
              Users
            </NavLink>
          </div>
        </div>
        <div className={s.itemBlocB}>
          <div className={s.itemNavLink}>
            <img src={newsListNavlink} alt="" />
            <NavLink to="/news" activeClassName={s.activeLink}>
              News
            </NavLink>
          </div>
          <div className={s.itemNavLink}>
            <img src={musicListImg} alt="" />
            <NavLink to="/music" activeClassName={s.activeLink}>
              Music
            </NavLink>
          </div>
          <div className={s.itemNavLink}>
            <img src={settingsListImg} alt="" />
            <NavLink to="/setings" activeClassName={s.activeLink}>
              Settings
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
