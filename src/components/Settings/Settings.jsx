import React, { useState } from "react";
import s from "./Settings.module.css";
import { Redirect } from "react-router-dom";
import SettingsForm from "./SettingsForm";
import SettingsData from "./SettingsData";

const Settings = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <div className={s.buttonEditBlock}>
      <div>
        {editMode ? (
          <SettingsForm
            {...props}
            saveProfile={props.saveProfile}
          />
        ) : (
          <SettingsData {...props} />
        )}
      </div>
      <div className={s.editData}>
        <button
          onClick={() => {
            setEditMode(true);
          }}
        >
          Edit my details
        </button>
        <button
          onClick={() => {
            setEditMode(false);
          }}
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default Settings;
