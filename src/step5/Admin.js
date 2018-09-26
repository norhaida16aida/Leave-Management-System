import React, {Component} from "react";
import {Redirect} from 'react-router-dom'

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fireRedirect: false
        }
    }
    render() {
        const {fireRedirect} = this.state;

        return (
            <div>
                {fireRedirect && <Redirect to="/home" />}
                <h1>Admin Panel</h1>
                <blockquote>
                    Approval or Not?
                </blockquote>
            </div>
        )
    }
}