import React from "react";
import Preloader from "../../common/preloader";
import s from "./ProfileInfo.module.css";
import likeIMG from "../../img/likeIMG.jpg";
import dislike from "../../img/dislikeIMG.png";
import baseImgUsers from "../../img/baseImgUsers.png";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import aboutMe from "../../img/aboytMe.png";
import contactsImg from "../../img/contacts.png";

const ProfileInfo = (props) => {
  if (!props.userProfile) {
    return <Preloader />;
  }

  return (
    <div className={s.content}>
      <div className={s.container}>
        <div className={s.contencAB}>
          <div className={s.contentA}>
            <div className={s.userImg}>
              {!props.userProfile.photos.large ? (
                <img className={s.baseImgUsers} src={baseImgUsers} alt="" />
              ) : (
                <img src={props.userProfile.photos.large} alt="" />
              )}
            </div>
          </div>
          <div className={s.contentB}>
            <h4 className={s.fullName}>{props.userProfile.fullName}</h4>
            <ProfileStatusWithHooks {...props} />
            <div className={s.border}></div>
            <div className={s.informationBloc}>
              <div className={s.information}>
                <img className={s.informationImg} src={contactsImg} alt="" />
                <h5>Information about me:</h5>
              </div>
              <div className={s.contactsBloc}>
                <div className={s.itemInformationBlocContact}>
                  <h4>Instagram:</h4>
                  <a href={props.userProfile.contacts.instagram}>
                    <p>{props.userProfile.contacts.instagram}</p>
                  </a>
                </div>
                <div className={s.itemInformationBlocContact}>
                  <h4>GitHub:</h4>
                  <p>{props.userProfile.contacts.github}</p>
                </div>
                <div className={s.itemInformationBlocContact}>
                  <h4>Twitter:</h4>
                  <p>
                    <a href={props.userProfile.contacts.twitter}>
                      {props.userProfile.contacts.twitter}
                    </a>
                  </p>
                </div>
                <div className={s.itemInformationBlocContact}>
                  <h4>Vk:</h4>
                  <p>
                    <a href={props.userProfile.contacts.vk}>
                      {props.userProfile.contacts.vk}
                    </a>
                  </p>
                </div>
              </div>
            </div>
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
              <h4>For A Job Description:</h4>
              <p>{props.userProfile.lookingForAJobDescription}</p>
            </div>
          </div>
        </div>
        <div className={s.aboutMeBloc}>
          <img src={aboutMe} alt="" />
          <h4>About Me:</h4> <p>{props.userProfile.aboutMe}</p>
        </div>
        <MyPostsContainer />
      </div>
    </div>
  );
};

export default ProfileInfo;
