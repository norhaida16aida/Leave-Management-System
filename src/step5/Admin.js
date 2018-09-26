import React, {Component} from "react";
import {Redirect} from 'react-router-dom'
import './Admin.css'

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fireRedirect: false
        };
    }

    getAccessToken = () => {
        fetch('/api/account/signin', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(this.state)
        })
            .then(res => res.json())
            .then(data => {
                let token = data.token || '';
                this.setState({token});
                sessionStorage.setItem('token', token)
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({fireRedirect: true})
        //this.getAccessToken();
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {email, password, fireRedirect} = this.state;

        if (fireRedirect) {
            return <Redirect to="/info"/>
        }

        return (
            <div className="text-center">
                <h1>Admin Approval Panel</h1>
                <form className="form-signin" onSubmit={this.handleSubmit} id="signin" name="signin"
                      ref={el => this.form = el}>
                    <h1 className="h3 mb-3 font-weight-normal">Admin Login</h1>
                    <label htmlFor="email1" className="sr-only">Email</label>
                    <input type="email" id="email1" name="email" value={email} className="form-control"
                           placeholder="Email"
                           required=""
                           autoFocus="" onChange={this.handleChange}/>
                    <label htmlFor="password1" className="sr-only">Password:</label>
                    <input type="password" id="password1" name="password" value={password} className="form-control"
                           placeholder="Password"
                           required="" onChange={this.handleChange}/>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                </form>
            </div>
        )
    }
}
