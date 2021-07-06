import {
  getAuth
} from "./auth-reducer";

const SET_INITIALIZET = "SET-INITIALIZET";


let initialState = {
  initializet: false
};


const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZET:
      return {
        ...state,
        initializet: true
      }
      default:
        return state;
  }
}

export const initializetSuccess = () => {
  return {
    type: SET_INITIALIZET,
  };
};



export const initialize = () => {

  return  (dispatch) => {
    const promise = dispatch(getAuth());
    promise.then(() => {
      dispatch(initializetSuccess())
    })
  }
}




export default appReducer;