import {
  FETCH_INFO,
  FETCH_INFO_ERROR,
  FETCH_PROFILE_INFO,
  FETCH_PROFILE_INFO_ERROR
} from '../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_INFO:
      return { ...state, info: action.payload }
    case FETCH_INFO_ERROR:
      return { ...state, error: action.payload }
    case FETCH_PROFILE_INFO:
        return { ...state, profileInfo: action.payload }
    case FETCH_PROFILE_INFO_ERROR:
        return { ...state, profileInfoError: action.payload }
  }

  return state;
}
