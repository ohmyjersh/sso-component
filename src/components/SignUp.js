import React from 'react';
import TextField from './common/TextField';  

const SignUp = (props) => {
    const {components, actions} = props;
    return (
        <div>
            <components.Card.Header>Sign Up!</components.Card.Header>
                <components.Card.Content>
                    <TextField {...{...props.components, label:'Username', update: (()=> console.log('hi')), value: ''}}/>              
                    <TextField {...{...props.components, label:'Password', update: (()=> console.log('hi')), value: ''}}/>    
                    <TextField {...{...props.components, label:'Confirm Password', update: (()=> console.log('hi')), value: ''}}/>    
                    <TextField {...{...props.components, label:'Phone Number', update: (()=> console.log('hi')), value: ''}}/>    
                    <components.Button>Sign Up!</components.Button>
                    </components.Card.Content>
                    <components.Card.Footer>
                        <components.Link to="/">Back to login</components.Link>
                </components.Card.Footer>
            </div>
        )
}

export default SignUp;