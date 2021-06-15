import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../Redux/users-reducer";
import React from "react";
import Users from "./Users";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

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

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    bootResponse: state.usersPage.bootResponse,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
  };
};


export default compose(connect(mapStateToProps, {
  follow,
  unfollow,
  getUsers}),withAuthRedirect)(UsersAPIContainer)

