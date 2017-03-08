import React from 'react';
import TextField from './common/TextField';  

const LoginShell = (props) => {
    const currentState = props.state.getIn(['login','currentState']);
    const {components} = props;
    if(currentState === 'LOGGEDIN') {
      console.log('go to....');
        window.location.href = props.redirect;
    }
    return (
        <div>
                <components.Card.Content>
                {currentState === 'LOGIN' ?
                    <Login {...props}/>
                    : null 
                    } 
                    {currentState === '2FA' ?
                    <TwoFactor {...props} />
                    : null
                    }
                </components.Card.Content>
                <components.Card.Footer>
                    <components.Link to="forgotPassword">Forgot password</components.Link>
                    <components.Link to="signup">Sign up</components.Link>
                </components.Card.Footer>
            </div>
    )
}

const Login = (props) => {
    const {components, actions} = props;
    const username = props.state.getIn(['login','username']);
    const password = props.state.getIn(['login', 'password']);
    const loginError = props.state.getIn(['login', 'error']);
    return (
        <div>
            <TextField {...{...props.components, label:'Username', update: actions.login.updateUsername, value: username}}/>
            <TextField {...{...props.components, label:'Password', update: actions.login.updatePassword, value: password}} />
            {loginError? <components.Error>{loginError}</components.Error> : null }
            <components.Button onClick={() => actions.login.submitLogin({username, password})} >Login</components.Button> 
        </div> 
    )
}

const TwoFactor = (props) => {
    const {components, actions} = props;
    const token = props.state.getIn(['login', 'token']);
    const tokenError = props.state.getIn(['login', 'error']);
    return (
        <div>
            <TextField {...{...props.components, label:'Send Token', update: actions.login.updateToken, value: token}} />
            {tokenError ? <components.Error>{tokenError}</components.Error> : null }
            <components.Button onClick={() => actions.login.submitToken({token})} >Submit</components.Button>
        </div>   
    )
}

export default LoginShell;