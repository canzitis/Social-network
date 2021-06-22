import DialogForm from "./DialogForm";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  const dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesElements = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <DialogForm addMessage={props.addMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
