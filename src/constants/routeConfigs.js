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
    render: (state, updateMethod) => {
      return (props) => (
        <Login 
          {...props}
          updateUserInfo={updateMethod.updateUserInfo}
        />
      )
    },
    exact: true,
  },
  register: {
    path: "/register",
    component: Register,
    render: (state, updateMethod) => {
      return (props) => (<Register {...props}/>)
    },
    exact: true,
  },
  home: {
    path: "/",
    component: Home,
    render: (state, updateMethod) => {
      return (props) => (<Home {...props}/>)
    },
    exact: true,
  },
  upload: {
    path: "/upload",
    component: UploadPage,
    render: (state, updateMethod) => {
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
    render: (state, updateMethod) => {
      return (props) => (<ManageBucket {...props}/>)
    },
    exact: true,
  },
  detailBucket: {
    path: "/detail-bucket",
    component: DetailBucket,
    render: (state, updateMethod) => {
      return (props) => (<DetailBucket {...props}/>)
    },
  },
  MinioHome: {
    path: '/minioHome',
    component: MinioHome,
    render: (state, updateMethod) => {
      return (props) => (
        <MinioHome 
          {...props}
          userInfo={state.userInfo}
          buckets={state.buckets}
          currentBucket={state.currentBucket}
          updateBucketList={updateMethod.updateBucketList}
          updateCurrentBucket={updateMethod.updateCurrentBucket}
          addBucket={updateMethod.addBucket}
        />
      )
    },
  }
};
