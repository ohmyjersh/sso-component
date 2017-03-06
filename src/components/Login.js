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
                    <TextField {...props.components}/>
                    <TextField {...props.components}/>
                    <components.Button onClick={() => actions.submitLogin({username:username, password:password})} >Login</components.Button>
                    {props.state.currentState === '2FA' ?
                        <div>
                            <TextField {...{...components, label:'Send Token'}}/>  
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
        <props.Input  />
    </div>
)


export default StyleWrapperHOC(Login);