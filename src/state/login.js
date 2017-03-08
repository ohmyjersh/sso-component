import handleRequest from '../faker/fakeHandleRequest';
import Immutable from 'immutable';

const actionTypes =  {
    SUCCESS_LOGIN:'SUCCESS_LOGIN',
    ERROR_LOGIN: 'ERROR_LOGIN',
    SUCCESS_TOKEN:'SUCCESS_TOKEN',
    ERROR_TOKEN: 'ERROR_TOKEN',
    UPDATE_USERNAME: 'UPDATE_USERNAME',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_TOKEN: 'UPDATE_TOKEN',
}


const initialState = Immutable.Map({
        currentState:'LOGIN',
        username:'',
        password:'',
        error:'',
        token:'',
        isFetching:false
    });

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.SUCCESS_LOGIN:
            return state.set('currentState', '2FA')
                        .set('username','')
                        .set('password','')
                        .set('error', '');
        case actionTypes.ERROR_LOGIN:
            return state.set('currentState', 'LOGIN')
                        .set('username','')
                        .set('password','')
                        .set('error', 'Error logging in....');
        case actionTypes.SUCCESS_TOKEN:
            return state.set('currentState', 'LOGGEDIN')
                        .set('token','')
                        .set('error', 'Error validating 2fa token....');
        case actionTypes.ERROR_TOKEN:
            return state.set('currentState', '2FA')
                        .set('token','')
                        .set('error', 'Error validating 2fa token....');
        case actionTypes.UPDATE_TOKEN:
            return state.set('token', payload);
        case actionTypes.UPDATE_USERNAME:
            return state.set('username', payload);
        case actionTypes.UPDATE_PASSWORD:
            return state.set('password', payload);
        default:
            return state;
    }
}

const successLogin = () => {
    return {
        type:actionTypes.SUCCESS_LOGIN
    }
}
const errorLogin = () => {
    return {
        type:actionTypes.ERROR_LOGIN
    }
}
const successToken = () => {
    return {
        type:actionTypes.SUCCESS_TOKEN
    }
}
const errorToken = () => {
    return {
        type:actionTypes.ERROR_TOKEN
    }
}

export const actionCreators = {
    updateUsername: (payload) => {
        return {
            type:actionTypes.UPDATE_USERNAME,
            payload
        }
    },
    updatePassword: (payload) => {
        return {
            type:actionTypes.UPDATE_PASSWORD,
            payload
        }
    },
    updateToken: (payload) => {
        return {
            type:actionTypes.UPDATE_TOKEN,
            payload
        }
    },
    submitLogin: (payload) => {
        return dispatch => {
            handleRequest(payload, () => dispatch(successLogin()), () => dispatch(errorLogin()));
        }
    },
    submitToken:(payload) => {
        return dispatch => {
            handleRequest(payload, () => dispatch(successToken()), () => dispatch(errorToken()));
        }
    }
}