import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { routeConfigs } from "./constants/routeConfigs";

import Header from "./components/Header";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        
        <BrowserRouter>
          {Object.values(routeConfigs).map((route) => (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
