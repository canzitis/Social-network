import React from "react";
import { Redirect } from "react-router";

import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let newMessageText = props.dialogsPage.newMessageText;

  const dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text);
  };



  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <textarea
          cols="60"
          rows="7"
          onChange={onMessageChange}
          value={newMessageText}
        ></textarea>
        <div>
          <button className={s.buttonAddMessages} onClick={onAddMessage}>
            Add message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
