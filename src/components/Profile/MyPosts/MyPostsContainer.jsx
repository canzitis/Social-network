import { connect } from "react-redux";
import { addPostActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostsText: state.profilePage.newPostsText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
