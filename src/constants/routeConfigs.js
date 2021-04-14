import Home from "../containers/Home"
import Login from "../containers/Login"
import Register from "../containers/Register"


export const routeConfigs = {
    home: {
        path: "/",
        component: Home,
        exact: true
    },
    login: {
        path: "/login",
        component: Login
    },
    register: {
        path: "/register",
        component: Register
    }
}