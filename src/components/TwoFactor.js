import React from 'react';
import StyleWrapperHOC from './StyleWrapperHOC';

const TwoFactor = ({components}) => {
    return (
        <div>
            <components.Container>
                <components.Label>Enter 2FA Pin</components.Label>
                <components.Input />
                <components.Button>Submit</components.Button>
            </components.Container>
        </div>
    )
}

export default StyleWrapperHOC(TwoFactor);