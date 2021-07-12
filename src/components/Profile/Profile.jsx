import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  debugger;
  return (
    <div className={s.content}>
      <ProfileInfo {...props} isOwer={props.isOwer} />
    </div>
  );
};

export default Profile;
