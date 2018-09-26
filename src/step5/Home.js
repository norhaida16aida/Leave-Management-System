import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {Redirect} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

const wellStyles = {maxWidth: 500, margin: '100px auto 100px'};

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            referrer: ''
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({referrer: e.target.textContent})
    }

    render() {
        const {referrer} = this.state;
        if (/Leave/i.test(referrer)) {
            return <Redirect to="/login"/>
        }
        else if (/Admin/i.test(referrer)) {
            return <Redirect to="/admin"/>
        }
        return (
            <div className="well" style={wellStyles}>
                <i className="fa fa-user-plus" style={{fontSize: 48, color: "red"}}></i>
                <Button bsStyle="danger"
                        bsSize="large" block
                        onClick={this.handleClick}
                >
                    On-Leave Login (Request)
                </Button>
                <i className="fa fa-user-plus" style={{fontSize: 48, color: "green", marginTop:100}}></i>
                <Button
                    bsStyle="success"
                    bsSize="large" block
                    onClick={this.handleClick}
                >
                    Admin Login (Approval)
                </Button>
            </div>
        )
    }
}

export default Home;