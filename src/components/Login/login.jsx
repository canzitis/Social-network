import React from "react";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import LoginForm from "./LoginForm";

const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <div>
        <LoginForm login={props.login} />
      </div>
    </div>
  );
};

export default connect(null, { login })(Login);
