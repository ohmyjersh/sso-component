import React from 'react';
import TextField from './common/TextField';  

const SignUp = (props) => {
    const {components, actions} = props;
    const username = props.state.getIn(['signup','username']);
    const password = props.state.getIn(['signup', 'password']);
    const confirmPassword = props.state.getIn(['signup','confirmPassword']);
    const phoneNumber = props.state.getIn(['signup', 'phoneNumber']);
    return (
        <div>
            <components.Card.Header>Sign Up!</components.Card.Header>
                <components.Card.Content>
                    <TextField {...{...props.components, label:'Username', update: actions.updateSignUsername, value: username}}/>              
                    <TextField {...{...props.components, label:'Password', update: actions.updateSignPassword, value: password}}/>    
                    <TextField {...{...props.components, label:'Confirm Password', update: actions.updateSignConfirmPassword, value: confirmPassword}}/>    
                    <TextField {...{...props.components, label:'Phone Number', update: actions.updateSignPhoneNumber, value: phoneNumber}}/>    
                    <components.Button>Sign Up!</components.Button>
                    </components.Card.Content>
                    <components.Card.Footer>
                        <components.Link to="/">Back to login</components.Link>
                </components.Card.Footer>
            </div>
        )
}

export default SignUp;