import Immutable from 'immutable';

const actionTypes =  {
    SUCCESS_LOGIN:'SUCCESS_LOGIN',
    ERROR_LOGIN: 'ERROR_LOGIN',
    UPDATE_USERNAME: 'UPDATE_USERNAME',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_TOKEN: 'UPDATE_TOKEN',
    UPDATE_FORGOT_PASSWORD: 'UPDATE_FORGOT_PASSWORD'
}

const initialState = Immutable.Map({
    currentState:'LOGIN',
    login: {
        username:'',
        password:'',
        error:''
    },
    twofactor: {
        token:'',
        error:''
    },
    forgotPassword: {
        password:'',
        error:''
    },
    signUp: {
        
    }}
);

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.SUCCESS_LOGIN:
            return {...state, currentState: '2FA', login: {username:'',password:'', error:''}};
        case actionTypes.ERROR_LOGIN:
            return {...state, login: {username:'',password:'', error:'Unable to login because of error.'}};
        case actionTypes.UPDATE_USERNAME:
            return {...state, login: {username:payload}};
        case actionTypes.UPDATE_PASSWORD:
            return {...state, login: {password:payload}};
        case actionTypes.UPDATE_FORGOT_PASSWORD:
            return {...state, forgotPassword: {password:payload}};
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

export const actionCreators = {
    updateUserName: (payload) => {
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
    submitLogin: (payload) => {
        return dispatch => {
            handleRequest(payload)
            .then(successLogin())
            .catch(errorLogin());
        }
    }
}

const handleRequest = (obj) => {
    new Promise((resolve, reject) => {
        if(obj.hasOwnProperty('token')) {
            if(obj.token === 111111) {
                resolve();
            }
            reject();
        }
        else if(obj.hasOwnProperty('username') && obj.hasOwnProperty('password')) {
            if(obj.username === 'username' && obj.password === 'pass123') {
                return resolve();
            }
            reject();
        }
    });
}