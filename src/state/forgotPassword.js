import handleRequest from './fakeHandleRequest';
import Immutable from 'immutable';

const actionTypes =  {
}


const initialState = Immutable.Map({
        username:'',
        error: '',
        isFetching:''
    });

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        default:
            return state;
    }
}

export const actionCreators = {

}