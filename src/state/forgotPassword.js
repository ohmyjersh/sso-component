import handleRequest from '../faker/fakeHandleRequest';
import Immutable from 'immutable';

const actionTypes =  {
    UPDATE_FORGOT_PASSWORD:'UPDATE_FORGOT_PASSWORD'
}


const initialState = Immutable.Map({
        username:'',
        error: '',
        isFetching:''
    });

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.UPDATE_FORGOT_PASSWORD:
            return state.set('username', payload);
        default:
            return state;
    }
}

export const actionCreators = {
    updateForgotPassword : (payload) => {
        return {
            type:actionTypes.UPDATE_FORGOT_PASSWORD,
            payload
        }
    },
    submitForgotPassword: (payload) => {
        console.log('submitting password');
    }
}