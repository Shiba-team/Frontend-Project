import React from "react"
import { routeConfigs } from '../../constants/routeConfigs'
import { withRouter } from 'react-router-dom'
import './register.css'
import FillInfo from './FillInfo'
import Success from './Success'

class Register extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            status: 'fill info'
        }

        this.registerAccount = (email, password) => {
            const api = `https://6085a48dd14a870017578113.mockapi.io/Users`
            fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                Body: {
                    username: email,
                    hashPassword: password
                }
            })
            .then( res => res.json())
            .then( data => {
                if(data.code === 200){
                    this.setState({ status: 'success' })
                }
                else{
                    alert('Đăng ký tài khoản thất bại')
                }
            })
        }

        this.submit = (e) => {
            e.preventDefault()
            const email = document.querySelector('#Register-email').value
            const password = document.querySelector("#Register-password").value
            const confirmPassword = document.querySelector("#Register-confirmPassword").value

            if(password === confirmPassword){
                this.registerAccount(email, password)
            }
            else {
                alert("Password và Confirm Password không trùng nhau, xin hãy nhập lại.")
            }
        }

        this.toLoginPage = () => {
            this.props.history.push(routeConfigs.login.path)
        }
    }

    render(){

        let bodyContent = <div>Error 404</div>
        if(this.state.status === 'fill info'){
            bodyContent = <FillInfo submit={this.submit} />
        }
        else if (this.state.status === 'success'){
            bodyContent = <Success toLoginPage={this.toLoginPage} />
        }
        
        return (
            <div className="Register-wrapper">
                <div className="Register-body">
                    <h1 className="Register-header">Sign Up</h1>
                    {bodyContent}
                </div>
            </div>
        )
    }
}

export default withRouter(Register)