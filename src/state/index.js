import * as login from './login';
import * as forgot from './forgotPassword';
import * as signup from './signUp';
import {
  combineReducers
} from 'redux-immutable';

export default combineReducers({login:login.reducer, forgot:forgot, signup:signup});

export const actionCreators = {...login.actionCreators, ...forgot.actionCreators};
