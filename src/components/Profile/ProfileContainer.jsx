import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getProfile } from "../../Redux/profile-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getProfile(id);
  }

  render() {
    return <Profile userProfile={this.props.userProfile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  };
};

export default compose(connect(mapStateToProps, { getProfile }),withRouter,withAuthRedirect)(ProfileContainer)




