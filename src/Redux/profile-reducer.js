import {
  profileAPI
} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  posts: [{
      message: "HI! I am new User! :)",
      likesCount: "225",
      id: "1"
    },
    {
      message: "Hello! I feel good here!",
      likesCount: "133",
      id: "2"
    },
  ],
  newPostsText: "Hello! ",
  userProfile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostsText: "",
          posts: [{
              message: state.newPostsText,
              likesCount: "0",
              id: "3"
            },
            ...state.posts,
          ],
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostsText: action.newText,
      };
    case SET_PROFILE:
      return {
        ...state,
        userProfile: action.profile
      }
      case SET_STATUS:
        return {
          ...state,
          status: action.status
        }

        default:
          return state;
  }
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

export const setProfile = (profile) => {

  return {
    type: SET_PROFILE,
    profile
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status: status
  };
};

export const getProfile = (id) => {
  return (dispatch) => {
    if (!id) {
      id = 2;
    }
    profileAPI.getProfile(id).then((data) => {
      dispatch(setProfile(data));
    });
  }
}

export const getStatus = (userid) => {
  return (dispatch) => {
    profileAPI.getStatus(userid).then((data) => {
      dispatch(setStatus(data));
    });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.resultCode === 0) {
        dispatch(setStatus(status));
      }

    });
  }
}

export default profileReducer;