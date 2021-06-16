import React from "react";
import Preloader from "../../common/preloader";
import s from "./ProfileInfo.module.css";
import likeIMG from "../../img/likeIMG.jpg";
import dislike from "../../img/dislikeIMG.png";
import ProfileStatus from "../ProfileStatus";

const ProfileInfo = (props) => {
  const baseImg =
    "https://academic-fitness.ru/wp-content/uploads/2017/09/user.png";

  if (!props.userProfile) {
    return <Preloader />;
  }
  return (
    <div className={s.content}>
      <img
        src={
          !props.userProfile.photos.large
            ? { baseImg }
            : props.userProfile.photos.large
        }
        alt=""
      />
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
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
