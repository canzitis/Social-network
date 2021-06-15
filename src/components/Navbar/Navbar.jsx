import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <div>
          <NavLink to="/profile" activeClassName={s.activeLink}>
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>
            Messages
          </NavLink>
        </div>
        <div>
          <NavLink to="/news" activeClassName={s.activeLink}>
            News
          </NavLink>
        </div>
        <div>
          <NavLink to="/music" activeClassName={s.activeLink}>
            Music
          </NavLink>
        </div>
        <div>
          <NavLink to="/setings" activeClassName={s.activeLink}>
            Settings
          </NavLink>
        </div>
        <div>
          <NavLink to="/users" activeClassName={s.activeLink}>
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
