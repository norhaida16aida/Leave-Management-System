import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './chinasofti_logo.png';
import './App.css';
import Navigator from './step6/Navigator'
import Footer from './step6/Footer'

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import S5 from './step5/';

const NotFound = ({location}) => (
    <h3 className="alert-danger alert-primary">
        No match for <code>{location.pathname}</code>
    </h3>
)

const App = () => (
    <Router>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to On-Leave Management Dashboard</h1>
                <Navigator/>
            </header>
            <Switch>
                <Route exact path="/" component={S5.Home}/>
                <Route path="/login" component={S5.Login}/>
                <Route path="/admin" component={S5.Admin}/>
                <Route path="/info" component={S5.Information}/>
                <Route component={NotFound}/>
            </Switch>
        <hr/>
            <Footer/>
        </div>
    </Router>
)

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root')
)

registerServiceWorker();
