import React, {PropTypes} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';
import SignUp from '../components/SignUp';
import {actionCreators as actions} from '../state';
const App = (props) => {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" render={ (ownProps) => <Login {...props} {...ownProps}/> } />
        <Route exact path="/forgotpassword" render={(ownProps) => <ForgotPassword {...props} {...ownProps}/> } />
        <Route exact path="/signup" render={(ownProps) => <SignUp {...props} {...ownProps}/> } />
      </div>
      </Router>
    );
}

App.propTypes = {
  redirect: React.PropTypes.string.isRequired,
  style: React.PropTypes.string
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
