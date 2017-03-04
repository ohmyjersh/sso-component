import React from 'react';
import StyleWrapper from './StyleWrapper';
const Login = ({components}) => {
    return <div>
        <components.Container>
            <components.Card>
                <components.Label>username</components.Label><components.Input />
                <components.Label>password</components.Label><components.Input />
                <components.Button>components</components.Button>
            </components.Card>
        </components.Container>
    </div>
}

export default StyleWrapper(Login);