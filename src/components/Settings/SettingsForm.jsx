import React from "react";
import s from "./Settings.module.css";
import { Field, Formik } from "formik";
import { Redirect } from "react-router-dom";
import { useState } from "react";

const SettingsForm = (props) => {
  const [statusSettingsForm, setStatusSessungsForm] = useState(false);
  const addValuesSettings = (initialValues) => {
    const profileFormNew = {
      lookingForAJob: initialValues.lookingForAJob,
      lookingForAJobDescription: initialValues.lookingForAJobDescription,
      fullName: initialValues.fullName,
      aboutMe: initialValues.aboutMe,
      contacts: {
        github: initialValues.github,
        vk: initialValues.vk,
        instagram: initialValues.instagram,
        twitter: initialValues.twitter,
        /* website: initialValues.website, */
      },
    };
    props.saveProfile(profileFormNew);
    setStatusSessungsForm(true);
  };

  if (statusSettingsForm) {
    return <Redirect to="/profile" />;
  }

  return (
    <Formik
      initialValues={{
        fullName: "",
        lookingForAJob: false,
        lookingForAJobDescription: "",
        github: "",
        vk: "",
        instagram: "",
        twitter: "",
        website: "",
        aboutMe: "",
      }}
      onSubmit={addValuesSettings}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className={s.accountSettingsForm}>
            <h2>Account settings</h2>
            <div>
              <p>Edit information about me:</p>
            </div>
            <div className={s.setaboutMe}>
              <h4>Full Name:</h4>
              <input
                className={s.inputForm}
                type="text"
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
                placeholder={props.userProfile.fullName}
              />
            </div>
            <div className={s.setaboutMe}>
              <h4>Instagram:</h4>
              <input
                className={s.inputForm}
                type="text"
                name="instagram"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.instagram}
                placeholder={props.userProfile.contacts.instagram}
              />
            </div>
            <div>
              <h4>GitHub:</h4>
              <input
                className={s.inputForm}
                type="text"
                name="github"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.github}
                placeholder={props.userProfile.contacts.github}
              />
            </div>
            <div>
              <h4>Twitter:</h4>
              <input
                className={s.inputForm}
                type="text"
                name="twitter"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.twitter}
                placeholder={props.userProfile.contacts.twitter}
              />
            </div>
            <div>
              <h4>Vk:</h4>
              <input
                className={s.inputForm}
                type="text"
                name="vk"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.vk}
                placeholder={props.userProfile.contacts.vk}
              />
            </div>
            <div>
              <h4>Website</h4>
              <input
                className={s.inputForm}
                type="text"
                name="website"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.website}
                placeholder={props.userProfile.contacts.website}
              />
            </div>
            <div className={s.InformationBlocJob}>
              <div className={s.inputCheckbox}>
                <h4 className={s.likeImg}>looking For A Job:</h4>
                <label>
                  <Field placeholder="" type="checkbox" name="lookingForAJob" />
                </label>
              </div>
              <h4>For A Job Description:</h4>
              <input
                className={s.inputForm}
                type="text"
                name="lookingForAJobDescription"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lookingForAJobDescription}
                placeholder={props.userProfile.lookingForAJobDescription}
              />
            </div>
            <div className={s.aboutMeBloc}>
              <h4>About Me:</h4>
              <input
                className={s.inputForm}
                type="text"
                name="aboutMe"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.aboutMe}
                placeholder={props.userProfile.aboutMe}
              />
            </div>
            <button type="submit">Save</button>
          </div>
        </form>
      )}
    </Formik>
  );
};
export default SettingsForm;
