import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuth } from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuth();
  }
  render() {
    return <Header login={this.props.login} isAuth={this.props.isAuth} />;
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { getAuth })(HeaderContainer);
