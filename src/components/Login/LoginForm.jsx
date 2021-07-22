import { Formik } from "formik";
import React from "react";
import s from "./login.module.css";

const validateEmail = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const LoginForm = (props) => {
  const addValuesLogin = (values) => {
    props.login(values.email, values.password, true);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validateEmail}
      onSubmit={addValuesLogin}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className={s.LoginForm} onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div>{errors.email && touched.email && errors.email}</div>
          <div>
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </div>
          <div>{errors.password && touched.password && errors.password}</div>
          <button className={s.loginBtn} type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
