import React from 'react'

class FillInfo extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="Register-form-wrapper">
                    <form method="POST" onSubmit={this.props.submit} className="Register-form">
                        <input required type="email" placeholder="Email" name="email" id="Register-email"/>
                        <input required type="password" placeholder="Password" name="password" id="Register-password"/>
                        <input required type="password" placeholder="Comfirm Password" id="Register-confirmPassword"/>
                        <button className="Register-button" type="submit" >Sign up</button>
                    </form>
                    <button className="Register-login-button" onClick={this.props.toLoginPage}><em>Login</em></button>
                </div>
            </React.Fragment>
        )
    }
}

export default FillInfo
