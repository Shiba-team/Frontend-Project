import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { routeConfigs } from "./constants/routeConfigs";

import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        userId: '12345678',
        loginToken: 'abcdef'
      },
      buckets: [],
      currentBucket: undefined
    }

    this.updateUserInfo = (userId, loginToken) => {
      this.setState({
        userInfo: {
          userId: userId,
          loginToken: loginToken
        }
      })
    }

    this.updateBucketList = (buckets) => {
      this.setState({
        buckets: buckets
      })
    }

    this.updateCurrentBucket = (bucket) => {
      this.setState({
        currentBucket: bucket
      })
    }

    this.addBucket = (bucket) => {
      this.setState((state) => ({
        buckets: [...state.buckets, bucket]
      }))
    }

    this.updateMethods = {
      updateUserInfo: this.updateUserInfo,
      updateBucketList: this.updateBucketList,
      updateCurrentBucket: this.updateCurrentBucket,
      addBucket: this.addBucket
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
              key={route.path}
            />
          ))}
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
