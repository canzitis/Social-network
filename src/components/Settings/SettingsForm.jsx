import React from "react";
import s from "./Settings.module.css";
import { Formik } from "formik";

const SettingsForm = (props) => {
  return (
    <Formik>
      <form action="">
        <div className={s.accountSettingsForm}>
          <h2>Account settings</h2>
          <div>
            <p>Edit information about me:</p>
          </div>
          <div className={s.setaboutMe}>
            <h4>Instagram:</h4>
            <input
              className={s.inputForm}
              placeholder={props.userProfile.contacts.instagram}
              type="text"
              value=""
            />
          </div>
          <div>
            <h4>GitHub:</h4>
            <input
              className={s.inputForm}
              placeholder={props.userProfile.contacts.github}
              type="text"
              value=""
            />
          </div>
          <div>
            <h4>Twitter:</h4>
            <input
              className={s.inputForm}
              placeholder={props.userProfile.contacts.twitter}
              type="text"
              value=""
            />
          </div>
          <div>
            <h4>Vk:</h4>
            <input
              className={s.inputForm}
              placeholder={props.userProfile.contacts.vk}
              type="text"
              value=""
            />
          </div>
          <div className={s.InformationBlocJob}>
            <h4 className={s.likeImg}>looking For A Job:</h4>
            <div className={s.inputCheckbox}>
              <div>
                <label for="scales">Yes</label>
                <input placeholder="" type="checkbox" value="" />
              </div>
              <div>
                <label for="scales">No</label>
                <input placeholder="" type="checkbox" value="" />
              </div>
            </div>
            <h4>For A Job Description:</h4>
            <input
              className={s.inputForm}
              placeholder=""
              type="text"
              value=""
            />
          </div>
          <div className={s.aboutMeBloc}>
            <h4>About Me:</h4>
            <p>{props.userProfile.aboutMe}</p>
            <input
              className={s.inputForm}
              placeholder=""
              type="text"
              value=""
            />
          </div>
        </div>
      </form>
    </Formik>
  );
};
export default SettingsForm;
