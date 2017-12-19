import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.css'

export default () => {
    return (
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <NavLink activeClassName = 'active selected' exact to="/" className="nav-link">Welcome</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName = 'active selected' to="/our-macarons" className="nav-link">Our Macarons</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName = 'active selected' to="/gifts-&-parties" className="nav-link">Gifts & Parties</NavLink>
            </li>
            <li className="nav-item">
                <NavLink activeClassName = 'active selected' to="/contact" className="nav-link">Contact</NavLink>
            </li>
        </ul>
    )
}