import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { routeConfigs } from "./constants/routeConfigs";

import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userId: '12345678',
      loginToken: 'abcdef'
    }

    this.updateUserInfo = (userId, loginToken) => {
      this.setState({
        userId: userId,
        loginToken: loginToken
      })
    }

    this.updateMethods = {
      updateUserInfo: this.updateUserInfo
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        
        <BrowserRouter>
          {Object.values(routeConfigs).map((route) => (
            <Route
              path={route.path}
              render={route.render(this.state, this.updateMethods)}
              exact={route.exact}
            />
          ))}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
