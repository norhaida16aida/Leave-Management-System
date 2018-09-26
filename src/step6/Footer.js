import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => (
    <div className="row">
        <div className="container">
            <div className="text-center text-danger">
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/login">Login</Link>&nbsp;|&nbsp;
                <Link to="/info">Information</Link>&nbsp;|&nbsp;
                <Link to="/admin">Admin</Link>
            </div>
            <div className="text-muted text-center">© Chinasoft International 2018, All rights are reserved.</div>
        </div>
    </div>
)

export default Footer;