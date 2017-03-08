import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';
import {actionCreators as actions} from '../state';

// use redux to handle state and current step of auth
// login => success => 2fa => redirect
// reset password
// sign up


const App = (props) => {
    if(props.state.get('currentState') === 'LOGGEDIN') {
      console.log('go to....');
        window.location.href = props.redirect;
    }
    return (
      <div className="App">
        <Login {...props} />
        {props.state.get('currentState') === 'ForgotPassword' ? <ForgotPassword {...props} /> : null }
      </div>
    );
}

App.propTypes = {
  redirect: React.PropTypes.string.isRequired,
  style: React.PropTypes.string.isRequired
};


const mapStateToProps = (state) => {
  return { state: state};
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators({ ...actions }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
