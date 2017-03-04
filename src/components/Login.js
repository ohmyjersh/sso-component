import React from 'react';
import StyleWrapperHOC from './StyleWrapperHOC';
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

export default StyleWrapperHOC(Login);