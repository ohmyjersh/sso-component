import React from 'react';
import IdsLogin from './IdsLogin';

// use redux to handle state and current step of auth
// login => success => 2fa => redirect
// reset password
// sign up

const App = ({redirect, style}) => {
    return (
      <div className="App">
        <IdsLogin style={style} redirect={redirect}/>
      </div>
    );
}

export default App;
