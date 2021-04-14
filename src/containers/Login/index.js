import React from "react"
import {Button} from "antd"
import { routeConfigs } from '../../constants/routeConfigs'


export default class Login extends React.Component{
    render(){
        return (
            <div>
                <Button onClick={() => window.location.href = routeConfigs.home.path}>Home</Button>
                <Button onClick={() => window.location.href = routeConfigs.register.path}>Register</Button>
            </div>
        )
    }
}