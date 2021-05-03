import Login from "../containers/Login"
import Register from "../containers/Register"
import UploadPage from '../upload-flow/UploadPage'


export const routeConfigs = {
    login: {
        path: "/login",
        component: Login,
        exact: true
    },
    register: {
        path: "/register",
        component: Register,
        exact: true
    },
    upload: {
        path: "/upload",
        component: UploadPage,
        exact: true
    }
}