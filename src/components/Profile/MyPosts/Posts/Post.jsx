import React from "react";
import s from "./Post.module.css";
import likesImg from "../../../img/likes.png";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.boxDataUsers}>
        <div className={s.dataUsers}>
          <img
            className={s.avaPostUser}
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt=""
          />
          <div className={s.messages}>
            <h5>{props.message}</h5>
          </div>
        </div>
        <div className={s.likesBloc}>
          <h5>
            <img className={s.likes} src={likesImg} alt="" />
            {props.likesCount}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Post;
