import React from "react";
import baseAva from "../img/baseImgUsers.png";
import s from "./Settings.module.css";
import likeImg from "../img/likeIMG.jpg";
import dislikeImg from "../img/dislikeIMG.png";

const SettingsData = (props) => {
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.loadingAvatar(e.target.files[0]);
    }
  };

  return (
    <div className={s.accountSettings}>
      <h2>Account settings</h2>
      <div>
        <p>Change Avatar:</p>
        <div className={s.setAvatar}>
          <img src={baseAva} alt="" />
          <div>
            <input type={"file"} onChange={onMainPhotoSelected} />
          </div>
          {props.loadingIsComplete ? "LOADING COMPLETED" : null}
        </div>
      </div>
      <div>
        <p>Edit information about me:</p>
      </div>
      <div className={s.setaboutMe}>
        <h4>Instagram:</h4>
        <p>{props.userProfile.contacts.instagram}</p>
      </div>
      <div>
        <h4>GitHub:</h4>
        <p>{props.userProfile.contacts.github}</p>
      </div>
      <div>
        <h4>Twitter:</h4>
        <p>{props.userProfile.contacts.twitter}</p>
      </div>
      <div>
        <h4>Vk:</h4>
        <p>{props.userProfile.contacts.vk}</p>
      </div>
      <div className={s.InformationBlocJob}>
        <p className={s.likeImg}>
          looking For A Job:
          {props.userProfile.lookingForAJob ? (
            <img src={likeImg} alt="" />
          ) : (
            <img src={dislikeImg} alt="" />
          )}
        </p>
        <h4>For A Job Description:</h4>
        <p>{props.userProfile.lookingForAJobDescription}</p>
      </div>
      <div className={s.aboutMeBloc}>
        <h4>About Me:</h4> <p>{props.userProfile.aboutMe}</p>
      </div>
    </div>
  );
};
export default SettingsData;
