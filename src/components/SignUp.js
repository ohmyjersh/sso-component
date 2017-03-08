import React from 'react';
import StyleWrapperHOC from './StyleWrapperHOC';

const SignUp = ({components}) => {
    return (
        <div>
            <components.Container>
                <components.Label>Username</components.Label>
                <components.Input />                
                <components.Label>Password</components.Label>
                <components.Input />
                <components.Label>Confirm Password</components.Label>
                <components.Input />
                <components.Label>Phone number</components.Label>
                <components.Input />
                <components.Button>Sign Up!</components.Button>
            </components.Container>
        </div>
    )
}

export default StyleWrapperHOC(SignUp);