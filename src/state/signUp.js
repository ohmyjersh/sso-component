import handleRequest from './fakeHandleRequest';
import Immutable from 'immutable';

const actionTypes =  {
    UPDATE_SIGN_USERNAME:'UPDATE_SIGN_USERNAME',
    UPDATE_SIGN_PASSWORD:'UPDATE_SIGN_PASSWORD',
    UPDATE_SIGN_CONFIRM_PASSWORD:'UPDATE_SIGN_CONFIRM_PASSWORD',
    UPDATE_SIGN_PHONE_NUMBER:'UPDATE_SIGN_PHONE_NUMBER'
}


const initialState = Immutable.Map({
        username:'',
        password:'',
        confirmPassword:'',
        phoneNumber:'',
        error: '',
        isFetching:''
    });

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.UPDATE_SIGN_USERNAME:
            return state.set('username', payload);
                case actionTypes.UPDATE_SIGN_PASSWORD:
            return state.set('password', payload);
                case actionTypes.UPDATE_SIGN_CONFIRM_PASSWORD:
            return state.set('confirmPassword', payload);
                case actionTypes.UPDATE_SIGN_PHONE_NUMBER:
            return state.set('phoneNumber', payload);
        default:
            return state;
    }
}

export const actionCreators = {
    updateSignUsername: (payload) => {
        return {
            type: actionTypes.UPDATE_SIGN_USERNAME,
            payload
        }
    },
    updateSignPassword: (payload) => {
        return {
            type: actionTypes.UPDATE_SIGN_PASSWORD,
            payload
        }
    },
    updateSignConfirmPassword: (payload) => {
        return {
            type: actionTypes.UPDATE_SIGN_CONFIRM_PASSWORD,
            payload
        }
    },
    updateSignPhoneNumber: (payload) => {
        return {
            type: actionTypes.UPDATE_SIGN_PHONE_NUMBER,
            payload
        }
    },
    submitSignUp: (payload) => {
        console.log('sign up');
    }
}