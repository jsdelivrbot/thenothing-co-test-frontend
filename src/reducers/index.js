import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app_reducer';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  router: routerReducer,
  form: formReducer
});

export default rootReducer;
