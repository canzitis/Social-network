import React from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css";
import DialogForm from "./DialogForm";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} id={p.id} />
  ));

  return (
    <div>
      <div>My posts</div>
      <DialogForm addPost={props.addPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
