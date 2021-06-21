import { Formik } from "formik";
import React from "react";
const Login = () => {
  return (
    <div>
      <h1>LOGIN</h1>
      <div>
        <LoginForm />
      </div>
    </div>
  );
};

const validateEmail = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const addValuesLogin = (values) => {
  setTimeout(() => {
    alert(values.email);
  }, 400);
};

const LoginForm = () => {
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
        <form onSubmit={handleSubmit}>
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <div>
            <input
              placeholder="password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </div>
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Login;
