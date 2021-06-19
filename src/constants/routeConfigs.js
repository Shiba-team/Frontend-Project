import React from 'react';
import Login from "../components/Login";
import Register from "../containers/Register";
import UploadPage from "../upload-flow/UploadPage";
import ManageBucket from "../containers/ManageBucket";
import Home from "../containers/Home/index";
import DetailBucket from "../containers/DetailBucket";
import MinioHome from "../components/MinioHome";

export const routeConfigs = {
  login: {
    path: "/login",
    component: Login,
    render: (state, method) => {
      return (props) => (
        <Login
          {...props}
          updateUserInfo={method.updateUserInfo}
        />
      )
    },
    exact: true,
  },
  register: {
    path: "/register",
    component: Register,
    render: (state, method) => {
      return (props) => (<Register {...props} />)
    },
    exact: true,
  },
  home: {
    path: "/",
    component: Home,
    render: (state, method) => {
      return (props) => (<Home {...props} />)
    },
    exact: true,
  },
  upload: {
    path: "/upload",
    component: UploadPage,
    render: (state, method) => {
      return (props) => (
        <UploadPage
          {...props}
          userInfo={state.userInfo}
        />
      )
    },
    exact: true,
  },
  manageBucket: {
    path: "/manage-bucket",
    component: ManageBucket,
    render: (state, method) => {
      return (props) => (<ManageBucket {...props} />)
    },
    exact: true,
  },
  detailBucket: {
    path: "/detail-bucket",
    component: DetailBucket,
    render: (state, method) => {
      return (props) => (<DetailBucket {...props} />)
    },
  },
  MinioHome: {
    path: '/minioHome',
    component: MinioHome,
    render: (state, method) => {
      return (props) => (
        <MinioHome
          {...props}
          userBuckets={state.userBuckets}
          currentBucket={state.currentBucket}
          currentFolder={state.currentFolder}

          getUserBuckets={method.getUserBuckets}
          selectBucket={method.selectBucket}
          createBucket={method.createBucket}
          selectFolder={method.selectFolder}
          selectFile={method.selectFile}
          deleteFolder={method.deleteFolder}
          deleteFile={method.deleteFile}
          downloadFolder={method.downloadFolder}
          downloadFile={method.downloadFile}
        />
      )
    },
  }
};
