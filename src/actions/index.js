import axios from 'axios';

import {
  FETCH_INFO,
  FETCH_INFO_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3090';

function fetchInfo() {
  return dispatch => {
    axios.get(`${ROOT_URL}/info`)
      .then(response => {
        dispatch({ type: FETCH_INFO, payload: response.data.data.info})
      })
      .catch((error) => {
        dispatch({ type: FETCH_INFO_ERROR, payload: 'Info fetching error'})
      })
  }
}

export {
  fetchInfo
}
