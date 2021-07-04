import React, { useEffect } from "react";
import { useState } from "react";
import s from "./ProfileStatus.module.css";
import penImg from "../img/pen.png";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, updateStatus] = useState(props.status);

  useEffect(() => {
    updateStatus(props.status);
  }, [props.status] );

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
      <div className={s.status}>
        <h5>Status:</h5>
        {editMode ? (
          <div className={s.inputStatus}>
            <input onChange={onStatusChange} value={status} />
            <div>
              <button onClick={deactivatedEditMode}>Save</button>
            </div>
          </div>
        ) : (
          <div className={s.spanStatus}>
            {true ? (
              <span onClick={activatedEditMode}>
                {!props.status ? (
                  <h5 className={s.statusSetup}>
                    <img src={penImg} alt="" />
                    Установить статус
                  </h5>
                ) : (
                  <h4>{props.status}</h4>
                )}
              </span>
            ) : (
              <span className={s.statusSetup}>
                {!props.status ? (
                  <h5>Установить статус</h5>
                ) : (
                  <h4>{props.status}</h4>
                )}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileStatusWithHooks;
