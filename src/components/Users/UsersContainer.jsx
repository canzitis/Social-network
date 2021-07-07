import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../Redux/users-reducer";
import React from "react";
import Users from "./Users";
import { compose } from "redux";
import {
  getBootResponse,
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getPortionSize,
  getTotalUsersCount,
  getUserPageReselect,
} from "../../Redux/Selectors/users-selector";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return <Users {...this.props} onPageChanged={this.onPageChanged} />;
  }
}


const mapStateToProps = (state) => {
  return {
    users: getUserPageReselect(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    bootResponse: getBootResponse(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
    portionSize: getPortionSize(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
  })
)(UsersAPIContainer);
