import { combineReducers } from "redux"

const Types = {
  FETCH: '@user/FETCH',
  FETCH_SUCCESS: '@user/FETCH_SUCCESS',
  FETCH_FAILURE: '@user/FETCH_FAILURE',
  FETCH_DETAILS: '@user/FETCH_DETAILS',
  FETCH_DETAILS_SUCCESS: '@user/FETCH_DETAILS_SUCCESS',
  FETCH_DETAILS_FAILURE: '@user/FETCH_DETAILS_FAILURE',
}

const INITIAL_STATE = {
  users: {
    data: null,
    loading: false,
  },
  userDetails: {
    data: null,
    loading: false,
  }
}

const usersReducer = (state = INITIAL_STATE.users, { type, payload }) => {
  switch (type) {
    case Types.FETCH:
      return { ...state, loading: true }
    case Types.FETCH_SUCCESS:
      return { ...state, data: payload, loading: false }
    case Types.FETCH_FAILURE:
      return { ...state, loading: false }
    default:
      return { ...state }
  }
}

const userDetailsReducer = (state = INITIAL_STATE.userDetails, { type, payload }) => {
  switch (type) {
    case Types.FETCH_DETAILS:
      return { ...state, loading: true }
    case Types.FETCH_DETAILS_SUCCESS:
      return { ...state, data: payload, loading: false }
    case Types.FETCH_DETAILS_FAILURE:
      return { ...state, loading: false }
    default:
      return { ...state }
  }
}


export const Actions = {
  fetchUsers: () => ({ type: Types.FETCH }),
  fetchUsersSuccess: (users) => ({
    type: Types.FETCH_SUCCESS,
    payload: users,
  }),
  fetchUsersFailure: () => ({ type: Types.FETCH_FAILURE }),
  fetchDetails: () => ({ type: Types.FETCH_DETAILS }),
  fetchDetailsSuccess: (user) => ({
    type: Types.FETCH_DETAILS_SUCCESS,
    payload: user,
  }),
  fetchDetailsFailure: () => ({ type: Types.FETCH_DETAILS_FAILURE }),
}

export default combineReducers({
  users: usersReducer,
  userDetails: userDetailsReducer,
})
