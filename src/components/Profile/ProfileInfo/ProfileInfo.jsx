import React from "react";
import Preloader from "../../common/preloader";
import s from "./ProfileInfo.module.css";
import likeIMG from "../../img/likeIMG.jpg";
import dislike from "../../img/dislikeIMG.png";
import baseImgUsers from "../../img/baseImgUsers.png";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import MyPostsContainer from "../MyPosts/MyPostsContainer";

const ProfileInfo = (props) => {
  debugger;
  if (!props.userProfile) {
    return <Preloader />;
  }
  return (
    <div className={s.content}>
      <div className={s.contentA}>
        <div className={s.userImg}>
          {!props.userProfile.photos.large ? (
            <img className={s.baseImgUsers} src={baseImgUsers} alt="" />
          ) : (
            <img src={props.userProfile.photos.large} alt="" />
          )}
        </div>
        <MyPostsContainer />
      </div>
      <div className={s.contentB}>
        <h4 className={s.fullName}>{props.userProfile.fullName}</h4>
        <ProfileStatusWithHooks {...props} />
        <div className={s.border}></div>
        <div className={s.information}>information about me:</div>
        <div className={s.informationBloc}>
          <div className={s.itemInformationBloc}>
            <img src="" alt="" />
            <h4>about Me:</h4> <p>{props.userProfile.aboutMe}</p>
          </div>
          <div className={s.itemInformationBloc}>
            <h4>instagram:</h4>
            <a href={props.userProfile.contacts.instagram}>
              <p>{props.userProfile.contacts.instagram}</p>
            </a>
          </div>
          <div className={s.itemInformationBloc}>
            <h4>github:</h4> <p>{props.userProfile.contacts.github}</p>
          </div>
        </div>
        <div className={s.informationBlocTo}>
          <div className={s.itemInformationBloc}>
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
          </div>
        </div>
        <div className={s.itemInformationBloc}>
          <h4>vk:</h4>
          <p>
            <a href={props.userProfile.contacts.vk}>
              {props.userProfile.contacts.vk}
            </a>
          </p>
        </div>
        <div className={s.itemInformationBloc}>
          <h4>twitter:</h4>
          <p>
            <a href={props.userProfile.contacts.twitter}>
              {props.userProfile.contacts.twitter}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
