import Login from "../containers/Login";
import Register from "../containers/Register";
import UploadPage from "../upload-flow/UploadPage";
import ManageBucket from "../containers/ManageBucket";
import Home from "../containers/Home/index";
import DetailBucket from "../containers/DetailBucket";

export const routeConfigs = {
  login: {
    path: "/login",
    component: Login,
    render: (state, updateMethod) => {
      return (props) => (<Login {...props}/>)
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
    render: (app) => {
      return (props) => (
        <UploadPage 
          {...props}
          userId={app.state.userId}
          loginToken={app.state.loginToken}
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
};
