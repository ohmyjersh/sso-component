import * as login from './login';
import {
  combineReducers
} from 'redux-immutable';

export default combineReducers({login:login.reducer});

export const actionCreators = {...login.actionCreators};
