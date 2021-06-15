const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: state.newMessageText }],
        newMessageText: "",
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newText,
      };
    default:
      return state;
  }
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

export default dialogsReducer;
