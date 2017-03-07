import React from 'react';
import StyleWrapperHOC from './StyleWrapperHOC';

const ForgotPassword = ({components}) => {
    return (
        <div>
            <components.Container>
                <components.Label>Enter Email Address</components.Label>
                <components.Input />
                <components.Button>Submit</components.Button>
            </components.Container>
        </div>
    )
}

export default StyleWrapperHOC(ForgotPassword);