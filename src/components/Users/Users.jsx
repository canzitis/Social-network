import React from "react";
import s from "./Users.module.css";
import loadingGIF from "../img/loading-gif2.gif";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  const baseImgUsers =
    "https://academic-fitness.ru/wp-content/uploads/2017/09/user.png";

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.users}>
      <div>
        {pages.map((p) => {
          return (
            <span className={s.activBtnPages}>
              <button
                className={props.currentPage === p && s.buttonAktive}
                onClick={() => {
                  props.onPageChanged(p);
                }}
              >
                {p}
              </button>
            </span>
          );
        })}
      </div>
      <div className={s.loaderGif}>
        {props.bootResponse ? <img src={loadingGIF} alt="" /> : null}
      </div>
      {props.users.map((u) => (
        <div>
          <NavLink to={"/profile/" + u.id}>
            <img src={u.photos.small ? u.photos.small : baseImgUsers} alt="" />
          </NavLink>
          <h3>{u.name}</h3>
          <div className={s.btnFollowed}>
            {u.followed ? (
              <button
                disabled={props.followingProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
