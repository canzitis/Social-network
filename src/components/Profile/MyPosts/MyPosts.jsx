import React from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css";
import PostsForm from "./PostsForm";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} id={p.id} key={p.id} />
  ));
  if (!props.isAuth) {
    return <div></div>;
  }

  return (
    <div className={s.posts}>
      <h3>Posts:</h3>
      <div>{postsElements}</div>
      <div className={s.border}></div>
      <PostsForm addPost={props.addPost} />
    </div>
  );
};

export default MyPosts;
