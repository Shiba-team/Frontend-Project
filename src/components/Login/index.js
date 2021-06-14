import React from "react";
import { routeConfigs } from "../../constants/routeConfigs";
import { setToken } from "../../constants/token";

import { Link, withRouter } from "react-router-dom";
import "./login.css";
import userIcon from "./icons/user.png";
import passwordIcon from "./icons/password.png";
import { loginApi } from '../../DAL/api'

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.submit = (e) => {
      e.preventDefault();
      const email = document.querySelector("#Login-email").value;
      const password = document.querySelector("#Login-password").value;

      loginApi(email, password)
      .then((loginResult) => {
        this.props.updateUserInfo(loginResult.userId, loginResult.loginToken)
        this.props.history.push(routeConfigs.MinioHome.path)
      });
    };
  }

  render() {
    return (
      <div className="Login-wrapper">
        <div className="Login-body">
          <h1>Login</h1>
          <form method="POST" className="Login-form" onSubmit={this.submit}>
            <div className="Login-input">
              <label htmlFor="Login-email">
                <img src={userIcon} alt="user icon" />
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="Login-email"
                required
              />
            </div>
            <div className="Login-input">
              <label htmlFor="Login-password">
                <img src={passwordIcon} alt="password icon" />
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                id="Login-password"
                required
              />
            </div>
            <Link
              className="Login-link Login-forgotPassword"
              to="/forgotPassword"
            >
              Forgot password?
            </Link>
            <button className="Login-button">Login</button>
            <Link
              className="Login-link Login-newAccount"
              to={routeConfigs.register.path}
            >
              Create a new account
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
