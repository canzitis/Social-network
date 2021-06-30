import React from "react";
import { useState } from "react";
import s from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, updateStatus] = useState(props.status);

  const activatedEditMode = () => {
    setEditMode(true);
  };

  const deactivatedEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    updateStatus(e.currentTarget.value);
  };

  return (
    <div className={s.statusBorder}>
      <h3 className={s.statusH3}>Статус:</h3>
      <div className={s.status}>
        {editMode ? (
          <div>
            <input onChange={onStatusChange} value={status} />
            <div>
              <button onClick={deactivatedEditMode}>Save</button>
            </div>
          </div>
        ) : (
          <div className={s.spanStatus}>
            {true ? (
              <span onClick={activatedEditMode}>
                {!props.status
                  ? "Здесь должен быть статус,но его не добавил :("
                  : props.status}
              </span>
            ) : (
              <span>
                {!props.status
                  ? "Здесь должен быть статус,но его не добавил :("
                  : props.status}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileStatusWithHooks;
