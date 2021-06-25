import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activatedEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivatedEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevSta) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div className={s.statusBorder}>
        <h3 className={s.statusH3}>Статус:</h3>
        <div className={s.status}>
          {this.state.editMode ? (
            <div>
              <input onChange={this.onStatusChange} value={this.state.status} />
              <div>
                <button onClick={this.deactivatedEditMode}>Save</button>
              </div>
            </div>
          ) : (
            <div className={s.spanStatus}>
              {this.props.isAuth ? (
                <span onClick={this.activatedEditMode}>
                  {!this.props.status
                    ? "Здесь должен быть статус,но его не добавил :("
                    : this.props.status}
                </span>
              ) : (
                <span>
                  {!this.props.status
                    ? "Здесь должен быть статус,но его не добавил :("
                    : this.props.status}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileStatus;
