import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => (
    <div className="row">
        <div className="container">
            <div className="text-center text-danger">
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/generallogin">General Login</Link>&nbsp;|&nbsp;
                <Link to="/adminlogin">Admin Login</Link>
            </div>
            <div className="text-muted text-center">© Chinasoft International 2018, All rights are reserved.</div>
        </div>
    </div>
)

export default Footer;