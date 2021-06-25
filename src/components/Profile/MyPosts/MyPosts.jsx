import React from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css";
import PostsForm from "./PostsForm";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} id={p.id} />
  ));
  if (!props.isAuth) {
    return <div></div>;
  }

  return (
    <div>
      <div>My posts</div>
      <PostsForm addPost={props.addPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
