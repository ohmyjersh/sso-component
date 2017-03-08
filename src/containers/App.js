import React, {PropTypes} from 'react';
import StyleWrapperHOC from '../components/StyleWrapperHOC';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';
import SignUp from '../components/SignUp';
import {actionCreators as actions} from '../state';
const App = (props) => {
    const {components} = props;
    return (
      <Router>
      <div className="App">
          <components.Container>
            <components.Card>
              <Route exact path="/" render={ (ownProps) => <Login {...props} {...ownProps}/> } />
              <Route exact path="/forgotpassword" render={(ownProps) => <ForgotPassword {...props} {...ownProps}/> } />
              <Route exact path="/signup" render={(ownProps) => <SignUp {...props} {...ownProps}/> } />
            </components.Card>
        </components.Container>
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

export default StyleWrapperHOC(connect(mapStateToProps, mapDispatchToProps)(App));
