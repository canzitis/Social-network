const ADD_MESSAGE = "ADD-MESSAGE";


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

};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: action.text }],
      };
    default:
      return state;
  }
};

export const addNewMessageCreator = (text) => {
  return {
    type: ADD_MESSAGE,
    text,
  };
};

export default dialogsReducer;
