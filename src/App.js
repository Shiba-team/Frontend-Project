import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import "../src/assets/scss/app.scss";

import {routeConfigs} from './constants/routeConfigs';

class App extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300}>
                    <Switch>
                        {Object.keys(routeConfigs).map(pathName => (
                            <Route {...routeConfigs[pathName]} key={`route-${pathName}`}/>
                        ))}
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}

export default withRouter(App);