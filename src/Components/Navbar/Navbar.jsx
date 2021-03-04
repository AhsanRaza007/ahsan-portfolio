import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {
    console.log(props)
    return (
        <nav className="navbar navbar-expand-md sticky-top navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/about">&lt; Md Ahsan Raza /&gt;</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item ml-3">
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </li>
                    <li className="nav-item ml-3">
                        <NavLink to="/skills" className="nav-link">Skills</NavLink>
                    </li>
                    <li className="nav-item ml-3">
                        <NavLink to="/projects" className="nav-link">Projects</NavLink>
                    </li>
                    <li className="nav-item ml-3">
                        <NavLink to="/experience" className="nav-link">Experience</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;