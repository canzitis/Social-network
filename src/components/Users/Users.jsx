import React from "react";
import s from "./Users.module.css";
import loadingGIF from "../img/loading-gif2.gif";
import { NavLink } from "react-router-dom";
import baseImgUsers from "../img/baseImgUsers.png";
import { useState } from "react";
import chevronBoubleLeft from "../img/chevron-double-left.png";
import chevronBoubleRight from "../img/chevron-double-right.png";
import statusShowImg from "../img/status-show.png";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pagesPortionSize = Math.ceil(pagesCount / props.portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
  const rightPortionPageNumber = portionNumber * props.portionSize;
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.users}>
      <div className={s.PagesBloc}>
        {portionNumber > 1 && (
          <div className={s.chevronBoubleLeft}>
            <img
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
              src={chevronBoubleLeft}
              alt=""
            />
          </div>
        )}
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <span className={s.activBtnPages} key={p.id}>
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
        {pagesPortionSize > portionNumber && (
          <div className={s.chevronBoubleRight}>
            <img
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}
              src={chevronBoubleRight}
              alt=""
            />
          </div>
        )}
      </div>
      <div className={s.loaderGif}>
        {props.bootResponse ? <img src={loadingGIF} alt="" /> : null}
      </div>
      <div className={s.usersSearch}>
        {props.users.map((u) => (
          <div key={u.id}>
            <NavLink className={s.usersImg} to={"/profile/" + u.id}>
              <img
                className={s.usersAvatar}
                src={u.photos.small ? u.photos.small : baseImgUsers}
                alt=""
              />
            </NavLink>
            <h3>{u.name}</h3>
            <span>
              Статус:
              {u.status && u.status.length < 18 ? (
                u.status
              ) : u.status && u.status.length > 18 ? (
                <div className={s.statusShow}>
                  <span>показать статус</span>
                  <button>
                    <img src={statusShowImg} alt="" />
                  </button>
                </div>
              ) : (
                <span className={s.statusNone}> Статус отсуствует</span>
              )}
            </span>
            <div className={s.btnFollowed}>
              {u.followed ? (
                <button className={s.buttonUnFollow}
                  disabled={props.followingProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button className={s.buttonFollow}
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
    </div>
  );
};

export default Users;
