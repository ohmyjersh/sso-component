import React from 'react';
import StyleWrapperHOC from './StyleWrapperHOC';
const Login = (props) => {
    const {components, actions} = props;
    let username = null;
    let password = null;
    return <div>
        <components.Container>
            <components.Card>
                <components.Label>username</components.Label><components.Input ref={(value) => { username = value; }}  />
                <components.Label>password</components.Label><components.Input ref={(value) => { password = value; }} />
                <components.Button onClick={() => actions.submitLogin({username:username, password:password})} >Login</components.Button>
            </components.Card>
        </components.Container>
    </div>
}

export default StyleWrapperHOC(Login);