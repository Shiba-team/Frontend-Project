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
    exact: true,
  },
  register: {
    path: "/register",
    component: Register,
    exact: true,
  },
  home: {
    path: "/",
    component: Home,
    exact: true,
  },
  upload: {
    path: "/upload",
    component: UploadPage,
    exact: true,
  },
  manageBucket: {
    path: "/manage-bucket",
    component: ManageBucket,
    exact: true,
  },
  detailBucket: {
    path: "/detail-bucket",
    component: DetailBucket,
  },
};
