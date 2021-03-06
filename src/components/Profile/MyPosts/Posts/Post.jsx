import React from "react";
import s from "./Post.module.css";
import likesImg from "../../../img/likes.png";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.avaPostUser}
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        alt=""
      />
      <div className={s.dataUsers}>
        <span>{props.message}</span>
        <div className={s.liksCount}>
          <button>
            <img className={s.likes} src={likesImg} alt="" />
            {props.likesCount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
