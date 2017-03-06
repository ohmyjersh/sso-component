const actionTypes =  {
    SUBMIT_LOGIN: 'SUBMIT_LOGIN'
}

const initialState = {
    currentState:'LOGIN',

}

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case actionTypes.SUBMIT_LOGIN:
            console.log(payload);
            return {...state, currentState: '2FA'};
        default:
            return state;
    }
}

export const actionCreators = {
    submitLogin: (payload) => ({
            type: actionTypes.SUBMIT_LOGIN,
            payload
        }),
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