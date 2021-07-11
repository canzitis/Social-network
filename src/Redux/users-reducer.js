import {
  userAPI,
  followAPI
} from "../api/api";

const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const BOOT_RESPONSE = 'BOOT-RESPONSE'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
  users: [],
  currentPage: 1,
  pageSize: 100,
  totalUsersCount: 0,
  portionSize: 5,
  bootResponse: false,
  isFetching: false,
  followingProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWED:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: true
            };
          }
          return u;
        }),
      };
    case UNFOLLOWED:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false
            };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }
      case SET_TOTAL_USERS_COUNT:
        return {
          ...state,
          totalUsersCount: action.usersCount
        }
        case SET_CURRENT_PAGE:
          return {
            ...state,
            currentPage: action.currentPage
          }
          case BOOT_RESPONSE:
            return {
              ...state,
              bootResponse: action.uploadResponse
            }
            case TOOGLE_IS_FOLLOWING_PROGRESS:
              return {
                ...state,
                followingProgress: action.isFetching ? [...state.followingProgress, action.userId] :
                  state.followingProgress.filter(id => id !== action.userId)
              }
              default:
                return state;
  }
};

export const followSuccess = (userId) => {
  return {
    type: FOLLOWED,
    userId,
  };
};

export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOWED,
    userId,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  }
};

export const setTotalUsersCount = (usersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    usersCount
  }
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
};

export const setBootResponse = (uploadResponse) => {
  return {
    type: BOOT_RESPONSE,
    uploadResponse
  }
};

export const toogleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
  }
};

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {

    dispatch(setBootResponse(true));
    dispatch(setCurrentPage(currentPage))
    dispatch(setUsers([
      /* ОЧИЩАЕМ ПОЛЬЗОВАТЕЛЕЙ ПОКА НЕ ЗАГРУЗИТСЯ ОТВЕТ С СЕРВА */
    ]));
    const data = await userAPI.getUsers(currentPage, pageSize);
    dispatch(setBootResponse(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));

  }
}


export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(toogleFollowingProgress(true, userId));
    const data = await followAPI.postFollow(userId);
    if (data.resultCode === 0) {
      dispatch(toogleFollowingProgress(false, userId));
      dispatch(followSuccess(userId));
    }
  }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    dispatch(toogleFollowingProgress(true, userId));
    const data = await followAPI.deleteUnfollow(userId)
    if (data.resultCode === 0) {
      dispatch(toogleFollowingProgress(false, userId));
      dispatch(unfollowSuccess(userId));
    }
  }
}

export default usersReducer;