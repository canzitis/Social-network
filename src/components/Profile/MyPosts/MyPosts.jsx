import React from "react";
import Post from "./Posts/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} id={p.id} />
  ));

  let onAddPost = () => {
    props.addPost();
  };

  let onNewPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
  };

  return (
    <div>
      <div>My posts</div>
      <div>
        <textarea
          cols="80"
          rows="8"
          onChange={onNewPostChange}
          value={props.newPostsText}
        ></textarea>
        <div>
          <button className={s.buttonAddPost} onClick={onAddPost}>
            ADD POST
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
