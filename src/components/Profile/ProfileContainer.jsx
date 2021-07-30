import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { compose } from "redux";
import {
  getProfile,
  getStatus,
  updateStatus,
  loadingAvatar,
} from "../../Redux/profile-reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getProfile(id);
    this.props.getStatus(id);
  }

  componentDidUpdate(prevProps) {
    let id = this.props.match.params.id;
    if (this.id !== prevProps.match.params.id) {
      this.props.getProfile(id);
      this.props.getStatus(id);
    }
  }

  render() {
    return <Profile {...this.props} isOwer={!this.props.match.params.id} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    loadingAvatar,
  }),
  withRouter
)(ProfileContainer);
