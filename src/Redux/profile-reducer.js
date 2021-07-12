import {
  profileAPI
} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET-PROFILE";
const SET_STATUS = "SET-STATUS";
const SET_AVATAR = "SET-AVATAR";

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
        posts: [{
            message: action.text,
            likesCount: "0",
            id: "3"
          },
          ...state.posts,
        ],
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
        case SET_AVATAR:
          return {
            ...state,
            profile: {
              ...state.profile,
              photos: action.photos
            }
          }

          default:
            return state;
  }
};

export const addPostActionCreator = (text) => {
  return {
    type: ADD_POST,
    text,
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

export const setAvatar = (photos) => {
  debugger;
  return {
    type: SET_AVATAR,
    photos
  };
};

export const getProfile = (id) => {
  return (dispatch) => {
    if (!id) {
      id = 15641;
    }
    profileAPI.getProfile(id).then((data) => {
      dispatch(setProfile(data));
    });
  }
}

export const getStatus = (userid) => {
  return async (dispatch) => {
    const data = await profileAPI.getStatus(userid)
    dispatch(setStatus(data));
  }
}

export const updateStatus = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0) {
      dispatch(setStatus(status));
    }

  }
}

export const loadingAvatar = (file) => {
  debugger;
  return async (dispatch) => {
    const response = await profileAPI.loadingAvatar(file)
    if (response.resultCode === 0) {
      dispatch(setAvatar(response.data.photos));
    }

  }
}

export default profileReducer;