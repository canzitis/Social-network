import React from "react";
import Preloader from "../../common/preloader";
import s from "./ProfileInfo.module.css";
import likeIMG from "../../img/likeIMG.jpg";
import dislike from "../../img/dislikeIMG.png";
import ProfileStatus from "../ProfileStatus";
import baseImgUsers from "../../img/baseImgUsers.png";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return <Preloader />;
  }
  return (
    <div className={s.content}>
      {!props.userProfile.photos.large ? (
        <img className={s.baseImgUsers} src={baseImgUsers} alt="" />
      ) : (
        <img src={props.userProfile.photos.large} alt="" />
      )}
      <ProfileStatusWithHooks {...props} />
      <h4>about Me:</h4> <p>{props.userProfile.aboutMe}</p>
      <h4>instagram:</h4>
      <a href={props.userProfile.contacts.instagram}>
        <p>{props.userProfile.contacts.instagram}</p>
      </a>
      <h4>github:</h4> <p>{props.userProfile.contacts.github}</p>
      <h4>
        <p className={s.likeImg}>
          looking For A Job:
          {props.userProfile.lookingForAJob ? (
            <img src={likeIMG} alt="" />
          ) : (
            <img src={dislike} alt="" />
          )}
        </p>
      </h4>
      <h4>looking For A Job Description:</h4>
      <p>{props.userProfile.lookingForAJobDescription}</p>
      <h4>vk:</h4>
      <p>
        <a href={props.userProfile.contacts.vk}>
          {props.userProfile.contacts.vk}
        </a>
      </p>
      <h4>twitter:</h4>
      <p>
        <a href={props.userProfile.contacts.twitter}>
          {props.userProfile.contacts.twitter}
        </a>
      </p>
      <div className={s.endLine}></div>
    </div>
  );
};

export default ProfileInfo;
