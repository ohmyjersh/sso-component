import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const url = window.location.href;
const style = _getParam('style', url);
const redirect = _getParam('redirect', url);

ReactDOM.render(
  <App redirect={redirect} style={style}/>,
  document.getElementById('root')
);

function _getParam(field, url) {
  var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
  var string = reg.exec(url);
  return string ? string[1] : null;
};