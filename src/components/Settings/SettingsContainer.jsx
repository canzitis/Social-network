import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Settings from "./Settings";
import { loadingAvatar, saveProfile } from "../../Redux/profile-reducer";

const SettingsContainer = (props) => {
  return <Settings {...props} />;
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth,
    loadingIsComplete: state.profilePage.loadingIsComplete,
    profileFormStatus: state.profilePage.profileFormStatus,
  };
};

export default compose(
  connect(mapStateToProps, { loadingAvatar, saveProfile }),
  withRouter
)(SettingsContainer);
