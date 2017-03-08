import Immutable from 'immutable';

const actionTypes =  {
    SUCCESS_LOGIN:'SUCCESS_LOGIN',
    ERROR_LOGIN: 'ERROR_LOGIN',
    SUCCESS_TOKEN:'SUCCESS_TOKEN',
    ERROR_LOGIN: 'ERROR_TOKEN',
    UPDATE_USERNAME: 'UPDATE_USERNAME',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_TOKEN: 'UPDATE_TOKEN',
    UPDATE_FORGOT_PASSWORD: 'UPDATE_FORGOT_PASSWORD'
}

const initialState = Immutable.Map({
    currentState:'LOGIN',
    login: Immutable.Map({
        username:'',
        password:'',
        error:''
    }),
    twofactor: Immutable.Map({
        token:'',
        error:''
    }),
    forgotPassword: Immutable.Map({
        password:'',
        error:''
    }),
    signUp: Immutable.Map({
        
    })}
);

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.SUCCESS_LOGIN:
            console.log('success reducer');
            return state.set('currentState', '2FA')
                        .setIn(['login', 'username'],'')
                        .setIn(['login', 'password'],'')
                        .setIn(['login', 'error'], '');
        case actionTypes.ERROR_LOGIN:
            console.log('in reducer, fail');
            return state.set('currentState', 'LOGIN')
                        .setIn(['login', 'username'],'')
                        .setIn(['login', 'password'],'')
                        .setIn(['login', 'error'], 'Error logging in....');
        case actionTypes.SUCCESS_TOKEN:
            alert('YOU ARE LOGGED IN MOFO');
            return state;
        case actionTypes.ERROR_TOKEN:
            return state.set('currentState', '2FA')
                        .setIn(['twofactor', 'token'],'')
                        .setIn(['twofactor', 'error'], 'Error validating 2fa token....');
        case actionTypes.UPDATE_TOKEN:
            return state.setIn(['twofactor', 'token'], payload);
        case actionTypes.UPDATE_USERNAME:
            return state.setIn(['login', 'username'], payload);
        case actionTypes.UPDATE_PASSWORD:
            return state.setIn(['login', 'password'], payload);
        case actionTypes.UPDATE_FORGOT_PASSWORD:
            return state.setIn(['forgotPassword', 'password'], payload);
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
    updateForgotPassword: (payload) => {
        return {
            type:actionTypes.UPDATE_FORGOT_PASSWORD,
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
            handleRequest(payload)
            .then(() => dispatch(successLogin()), () => dispatch(errorLogin()));
        }
    },
    submitToken:(payload) => {
        return dispatch => {
            handleRequest(payload)
            .then(() => dispatch(successToken()), () => dispatch(errorToken()));
        }
    }
}

const handleRequest = (obj) => {
    console.log(obj);
    return new Promise((resolve, reject) => {
        if(obj.hasOwnProperty('token')) {
            if(obj.token === '111111') {
                return resolve();
            }
            return reject();
        }
        else if(obj.hasOwnProperty('username') && obj.hasOwnProperty('password')) {
            if(obj.username === 'username' && obj.password === 'pass123') {
                return resolve();
            }
            return reject();
        }
    });
}