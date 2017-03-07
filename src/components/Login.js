import React from 'react';
import StyleWrapperHOC from './StyleWrapperHOC';
const Login = (props) => {
    console.log(props);
    const {components, actions} = props;
    let username = null;
    let password = null;
    return <div>
        <components.Container>
            <components.Card>
                <components.Card.Header>Login</components.Card.Header>
                <components.Card.Content>
                {props.state.get('currentState') === 'LOGIN' ?
                    <div>
                        <TextField {...{...props.components,label:'Username'}} value={props.state.getIn(['login', 'username'])} update={props.actions.updateUsername}/>
                        <TextField {...{...props.components,label:'Password'}} value={props.state.getIn(['login', 'password'])} update={props.actions.updatePassword}/>
                        {props.state.getIn(['login', 'error']) ? <components.Error>asdf</components.Error> : null }
                        <components.Button onClick={() => actions.submitLogin({username:props.state.getIn(['login', 'username']), password:getIn(['login', 'password'])})} >Login</components.Button> 
                    </div> 
                    : null 
                    } 
                    {props.state.get('currentState') === '2FA' ?
                        <div>
                            <TextField {...{...components, label:'Send Token'}} value={props.state.getIn(['twofactor', 'token'])} update={props.actions.updateToken}/> 
                            {props.state.getIn(['twofactor', 'error']) ? <components.Error>asdf</components.Error> : null }
                            <components.Button onClick={() => actions.submitLogin({username:username, password:password})} >Submit</components.Button>
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

const TextField = (props) => (
    <div>
        {props.Label ? <props.Label>{props.label}</props.Label> : null}
        <props.Input value={props.value} onChange={() => props.action(e.target.value)} />
    </div>
)


export default StyleWrapperHOC(Login);