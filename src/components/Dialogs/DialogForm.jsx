import React from "react";
import { Formik } from "formik";
import s from "./Dialogs.module.css";

const DialogForm = (props) => {
  const addMessageValue = (value) => {
    props.addMessage(value.text);
  };

  return (
    <Formik initialValues={{ text: "" }} onSubmit={addMessageValue}>
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <input
            className={s.dialogInput}
            type="text"
            name="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
          />
          <div>
            <button className={s.buttonAddMessages} type="addMessage">
              Add Message
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default DialogForm;
