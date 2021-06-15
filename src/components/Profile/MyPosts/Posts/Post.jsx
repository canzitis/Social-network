import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
        alt=""
      />
      {props.message}
      <button className={s.likesBtn}>{`Likes: ${props.likesCount}`}</button>
    </div>
  );
};

export default Post;
