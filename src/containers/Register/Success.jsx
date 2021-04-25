import React from 'react'

class Success extends React.Component{
    
    render(){
        return (
            <React.Fragment>
                <h2 className="Register-signupMessage">Sign up Successfully!</h2>
                <button className="Register-button" onClick={this.props.toLoginPage}>Login</button>
            </React.Fragment>
        )
    }
}

export default Success
