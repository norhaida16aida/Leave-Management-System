import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from './chinasofti_logo.png';
import './App.css';
import './index.css';
import Home from './components/Home'
import Navigator from './components/Navigator'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import S5 from './step5/';
import ListTable from './step6/ListTable'
import RequestForm from './step6/RequestForm'
import Data from './step7/Data'

import registerServiceWorker from './registerServiceWorker';
const removeRequest = index => {
};

const App = () => (
    <Router>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to On-Leave Management Dashboard</h1>
                <Navigator/>
            </header>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/generallogin" component={S5.GeneralLogin}/>
                <Route path="/adminlogin" component={S5.AdminLogin}/>
                <Route path="/info" component={S5.Information}/>
                <Route path="/list"
                       render={(routeProps) => (
                           <ListTable
                               requests={Data.requests}
                               removeRequest={removeRequest}
                               isAdmin="true"
                               {...routeProps}
                           />
                       )}
                />
                <Route path="/request" component={RequestForm}/>
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
    </div>
    ,
    document.getElementById('root')
)

registerServiceWorker();
