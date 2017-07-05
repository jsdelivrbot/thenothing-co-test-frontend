import axios from 'axios';
import { push } from 'react-router-redux'

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3090';

function signinUser({email, password}) {
  return dispatch => {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/login`, { email, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        // TODO: Think about automatical destroying of a token.
        localStorage.setItem('token', response.data.data.token);
        // - Redirect to the route '/feature'
        dispatch(push('/profile'));
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Sign In Details'));
      });
  }
}

function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER }
}

function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export {
  signinUser,
  signoutUser
}
