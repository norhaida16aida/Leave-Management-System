import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import "./GeneralLogin.css";

class GeneralLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            fireRedirect: false
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    fetchData() {
        fetch('/api/on_leave/customer_login', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(data => {
                console.log('data:', data)
            })
            .catch(e => {
                throw new Error(e);
            })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({fireRedirect: true});
        //Not work: return <Redirect to="/info"/>
        console.log(JSON.stringify(this.state));
    }

    render() {
        const {fireRedirect} = this.state;
        return (
            <div>
                {fireRedirect && (<Redirect to="/info"/>)}
                <div className="Login">
                    <h1>General User Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <Button
                            bsStyle="primary"
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit"
                        >
                            General Login
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralLogin);