import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { routeConfigs } from "./constants/routeConfigs";
import Header from "./components/Header";
import {
  getUserBuckets,
  createBucket,
  getFolder
} from './BLL/bucketServices'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        userId: '12345678',
        loginToken: 'abcdef'
      },
      userBuckets: [],
      currentBucket: undefined,
      currentFolder: undefined
    }

    this.updateUserInfo = (userId, loginToken) => {
      this.setState({
        userInfo: {
          userId: userId,
          loginToken: loginToken
        }
      })
    }

    this.getUserBuckets = () => {
      getUserBuckets(this.state.userInfo)
        .then((buckets) => {
          this.setState({
            userBuckets: buckets
          })
        })
    }

    this.selectBucket = (bucketId) => {
      const selectedBucket = this.state.userBuckets
        .filter((bucket) => bucket.id === bucketId)[0]
      this.setState({
        currentBucket: selectedBucket
      })
      getFolder(
        this.state.userInfo,
        selectedBucket.id,
        selectedBucket.rootFolderId
      ).then((folder) => {
        this.setState({
          currentFolder: folder
        })
      })
    }

    this.createBucket = (bucketName) => {
      createBucket(this.state.userInfo, bucketName)
        .then((newBucket) => {
          this.addBucket(newBucket)
        })
    }

    this.addBucket = (bucket) => {
      this.setState((state) => ({
        userBuckets: [...state.userBuckets, bucket]
      }))
    }

    this.methods = {
      updateUserInfo: this.updateUserInfo,
      getUserBuckets: this.getUserBuckets,
      selectBucket: this.selectBucket,
      createBucket: this.createBucket
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
              render={route.render(this.state, this.methods)}
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
