import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../Redux/profile-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getProfile(id);
    this.props.getStatus(id);
  }

  render() {
    return (
      <Profile
        userProfile={this.props.userProfile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
