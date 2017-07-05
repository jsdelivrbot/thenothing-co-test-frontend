import {
  FETCH_INFO,
  FETCH_INFO_ERROR
} from '../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_INFO:
      return { ...state, info: action.payload }
      case FETCH_INFO_ERROR:
        return { ...state, error: 'Info fetching error' }
  }

  return state;
}
