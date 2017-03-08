import React from 'react';
import TextField from './common/TextField';  

const ForgotPassword = (props) => {
    const {components} = props;
    return (
        <div>
            <components.Card.Header>Forgot Password</components.Card.Header>
                <components.Card.Content>
                    <TextField {...{...props.components, label:'Enter Username', update: (()=> console.log('hi')), value: ''}}/>
                <components.Button>Submit</components.Button>
            </components.Card.Content>
            <components.Card.Footer>
                <components.Link to="/">Back to login</components.Link>
            </components.Card.Footer>
        </div>
    )
}

export default ForgotPassword;