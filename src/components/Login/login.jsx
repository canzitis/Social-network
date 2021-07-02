import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../Redux/auth-reducer";
import LoginForm from "./LoginForm";
import s from "./login.module.css";
import keyImg from "../img/key.png";

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div className={s.loginPage}>
      <img src={keyImg} alt="" />
      <h1>login</h1>
      <div>
        <LoginForm {...props} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
