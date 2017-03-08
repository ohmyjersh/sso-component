import React from 'react';
import Immutable from 'immutable';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/App';
import reducer from './state';

const url = window.location.href;
const style = _getParam('style', url);
const redirect = _getParam('redirect', url);

const initialState = Immutable.Map();
const store = createStore(reducer,initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App redirect={redirect} style={style}/>
  </Provider>,
  document.getElementById('root')
);

function _getParam(field, url) {
  var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
  var string = reg.exec(url);
  return string ? string[1] : null;
};