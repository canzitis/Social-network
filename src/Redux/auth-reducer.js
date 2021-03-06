import {
  authAPI
} from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";


let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
      default:
        return state;
  }
}


export const setAuthUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: {
      id,
      email,
      login,
      isAuth,
    }

  };
};


export const getAuth = () => {
  return (dispatch) => {
    return authAPI.getAuth().then((data) => {

      if (data.resultCode === 0) {
        const {
          id,
          login,
          email,
        } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  }
}

export const login = (email, password, rememberMe) => {
  return async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
      dispatch(getAuth())
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }

  }
}


export default authReducer;