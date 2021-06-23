import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const store = {
  _state: {
    profilePage: {
      posts: [
        { message: "HI! I am new User! :)", likesCount: "225", id: "1" },
        { message: "Hello! I feel good here!", likesCount: "133", id: "2" },
      ],
      newPostsText: "Hello! ",
    },
    dialogsPage: {
      dialogs: [
        { name: "Maksim", id: "1" },
        { name: "Lena", id: "2" },
        { name: "Kirill", id: "3" },
        { name: "Sasha", id: "4" },
        { name: "Maksim", id: "5" },
        { name: "Sergey", id: "6" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is you it-kamasutra?" },
        { id: 3, message: "YO" },
        { id: 4, message: "COOL" },
      ],

      newMessageText: "",
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this.state);
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const addNewMessageCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text,
  };
};

window.store = store;

export default store;
