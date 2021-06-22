import React from "react";
import { Formik } from "formik";
import s from "./MyPosts.module.css";

const DialogForm = (props) => {
  const onAddPostValue = (value) => {
    props.addPost(value.text);
  };

  return (
    <div>
      <Formik initialValues={{ text: "" }} onSubmit={onAddPostValue}>
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              className={s.profileInput}
              type="text"
              name="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.text}
            />
            <div>
              <button className={s.buttonAddPost} type="addPost">
                Add Post
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default DialogForm;
