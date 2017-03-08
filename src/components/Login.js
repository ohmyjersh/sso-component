import React from 'react';
import StyleWrapperHOC from './StyleWrapperHOC';
const Login = (props) => {
    const {components, actions} = props;
    console.log(actions);
    if(props.state.getIn(['login','currentState']) === 'LOGGEDIN') {
      console.log('go to....');
        window.location.href = props.redirect;
    }
    const username = props.state.getIn(['login','username']);
    const password = props.state.getIn(['login', 'password']);
    const token = props.state.getIn(['login', 'token']);
    const loginError = props.state.getIn(['login', 'error']);
    const tokenError = props.state.getIn(['login', 'error']);
    return <div>
        <components.Container>
            <components.Card>
                <components.Card.Header>Login</components.Card.Header>
                <components.Card.Content>
                {props.state.getIn(['login', 'currentState']) === 'LOGIN' ?
                    <div>
                        <TextField {...{...props.components, label:'Username', update: actions.updateUsername, value: username}}/>
                        <TextField {...{...props.components, label:'Password', update: actions.updatePassword, value: password}} />
                        {loginError? <components.Error>{loginError}</components.Error> : null }
                        <components.Button onClick={() => actions.submitLogin({username, password})} >Login</components.Button> 
                    </div> 
                    : null 
                    } 
                    {props.state.getIn(['login', 'currentState']) === '2FA' ?
                        <div>
                        <TextField {...{...props.components, label:'Send Token', update: actions.updateToken, value: token}} />
                            {tokenError ? <components.Error>{tokenError}</components.Error> : null }
                            <components.Button onClick={() => actions.submitToken({token})} >Submit</components.Button>
                        </div>
                    : null
                    }
                </components.Card.Content>
                <components.Card.Footer>
                    <a href="forgotPassword">Forgot password</a>
                    <a href="signup">Sign up</a>
                </components.Card.Footer>
            </components.Card>
        </components.Container>
    </div>
}

const TextField = (props) => {
    return(
    <div>
        {props.Label ? <props.Label>{props.label}</props.Label> : null}
        <props.Input value={props.value} onChange={(e) => props.update(e.target.value)} />
    </div>)
}


export default StyleWrapperHOC(Login);