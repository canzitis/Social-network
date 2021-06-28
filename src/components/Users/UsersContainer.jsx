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
  getTotalUsersCount,
  getUsersPage,
} from "../../Redux/Selectors/users-selector";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <Users
        users={this.props.users}
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        bootResponse={this.props.bootResponse}
        setBootResponse={this.props.setBootResponse}
        isFetching={this.props.isFetching}
        followingProgress={this.props.followingProgress}
        totalUsersCount={this.props.totalUsersCount}
      />
    );
  }
}

/* const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    bootResponse: state.usersPage.bootResponse,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
  };
}; */

const mapStateToProps = (state) => {
  return {
    users: getUsersPage(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    bootResponse: getBootResponse(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
  })
)(UsersAPIContainer);
