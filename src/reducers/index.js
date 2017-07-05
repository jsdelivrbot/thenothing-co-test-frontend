import { combineReducers } from 'redux';
import appReducer from './app_reducer'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  app: appReducer,
  router: routerReducer
});

export default rootReducer;
