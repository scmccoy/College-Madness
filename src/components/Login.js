import React from 'react';

class Login extends React.Component {

    render() {
      // {'with_credentials': true}
        return (
            <div>
                <h1>Welcome to the Login Screen</h1>
                <div className="login__container">

                    <a href="https://kipp-madness-api.herokuapp.com/auth/google_oauth2">
                        <button className="kippBtn">Login with Google</button>
                    </a>
                </div>
                <h1>Take this survey L8r</h1>
                <div className="login__container">
                  <a href="https://goo.gl/forms/u3oK6wey8dp2hkDZ2">
                    <button className="kippBtn">Take the Survey</button>
                  </a>
                </div>
            </div>
        );
    }
}

export default Login;
