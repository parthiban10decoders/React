import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login'
import Welcome from './Welcome'


export default class Routes extends Component {
    render() {
        return (
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/dashboard" component={Welcome} />
                    </Switch>
                </Router>
        )
    }
}