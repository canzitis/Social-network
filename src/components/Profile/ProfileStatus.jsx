import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
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
  };
  render() {
    return (
      <div className={s.status}>
        {this.state.editMode ? (
          <div>
            <input value={this.props.status} />
            <div onClick={this.deactivatedEditMode}>
              <button>Save</button>
            </div>
          </div>
        ) : (
          <div className={s.spanStatus}>
            <span onClick={this.activatedEditMode}>{this.props.status}</span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
