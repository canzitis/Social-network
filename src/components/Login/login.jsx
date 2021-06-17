import Formik from "formik";
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

const LoginForm = () => {
  return (
    <div>
      <Formik>
        <TextInput />
        <TextInput />
        <Button>Submit</Button>
        <Button>Reset</Button>
      </Formik>
    </div>
  );
};

export default Login;
