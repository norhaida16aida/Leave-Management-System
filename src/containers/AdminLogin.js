import React, {Component} from "react";
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import './AdminLogin.css'

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fireRedirect: false
        };
    }

    fetchData() {
        fetch('/api/on_leave/admin_login', {
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
            .catch(e => {
                throw new Error(e);
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({fireRedirect: true})
        console.log(JSON.stringify(this.state));
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {email, password, fireRedirect} = this.state;
        if (fireRedirect) {
            return <Redirect to="/list"/>
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
                    <label htmlFor="password" className="sr-only">Password:</label>
                    <input type="password" id="password" name="password" value={password} className="form-control"
                           placeholder="Password"
                           required="" onChange={this.handleChange}/>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Admin Login</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminLogin);

