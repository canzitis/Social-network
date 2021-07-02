import React from "react";
import { Formik } from "formik";
import s from "./MyPosts.module.css";

const validateTextPost = (values) => {
  const errors = {};
  if (!values.text || values.text.length > 200) {
    errors.text = "Длина не может быть меньше 1 символа или больше 200";
  }
  return errors;
};

const PostForm = (props) => {
  const onAddPostValue = (value) => {
    props.addPost(value.text);
  };
  return (
    <Formik
      initialValues={{ text: "" }}
      validate={validateTextPost}
      onSubmit={onAddPostValue}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            className={s.profileInput}
            type="text"
            name="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
            placeholder="write a post"
          />

          <div>
            <button type="submit" className={s.buttonAddPost}>
              Add Post
            </button>
          </div>
          <div className={s.errorsText}>
            {errors.text && touched.text && errors.text}
          </div>
        </form>
      )}
    </Formik>
  );
};

export default PostForm;
