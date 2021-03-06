import {bindActionCreators} from 'redux'
import * as login from './login';
import * as forgot from './forgotPassword';
import * as signup from './signUp';
import {
  combineReducers
} from 'redux-immutable';

export default combineReducers({login:login.reducer, forgot:forgot.reducer, signup:signup.reducer});

export const actionCreators = (dispatch) => ({actions:{
                              login: bindActionCreators({ ...login.actionCreators }, dispatch),
                              forgot: bindActionCreators({...forgot.actionCreators}, dispatch), 
                              signup: bindActionCreators({...signup.actionCreators}, dispatch)
                            }
                          });


