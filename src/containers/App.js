import React from 'react';
import StyleWrapperHOC from '../components/StyleWrapperHOC';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import { connect } from 'react-redux'
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';
import SignUp from '../components/SignUp';
import Error from '../components/Error';
import {actionCreators as actions} from '../state';
const App = (props) => {
    const {components, referrer, redirect} = props;
    return (        
      <Router>
      <div className="App">
          <components.Container>
            <components.Card>
            <components.Card.Header>{referrer ? `${referrer}` : 'Error'}</components.Card.Header>
             {  referrer && redirect ?
             <div>
                <Route exact path="/" render={ (ownProps) => <Login {...props} {...ownProps}/> } />
                <Route exact path="/forgotpassword" render={(ownProps) => <ForgotPassword {...props} {...ownProps}/> } />
                <Route exact path="/signup" render={(ownProps) => <SignUp {...props} {...ownProps}/> } />
              </div>
              : <Error {...props} /> }
            </components.Card>
        </components.Container>
      </div>
      </Router> 
    );
}

App.propTypes = {
  redirect: React.PropTypes.string.isRequired,
  referrer: React.PropTypes.string.isRequired
};

export default StyleWrapperHOC(connect(state=>({state}), actions)(App));
