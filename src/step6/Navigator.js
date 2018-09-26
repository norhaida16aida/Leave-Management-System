import React from 'react'
import {Link} from 'react-router-dom'

const Navigator = () => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <Link className="navbar-brand alert-heading badge-primary" to="/">Chinasoft International</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/admin">Admin</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/info">Information</Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navigator;