import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


const Navbar = props => (
    <div>
        <nav className="" >
            <Link className="navbar-brand" to="/">
                Kaan's Kawasaki
           </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/"
                            className={
                                window.location.pathname === "/" ||
                                    window.location.pathname === "/about"
                                    ? "nav-link active"
                                    : "nav -link"
                            }
                        >
                            About
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/discover"
                            className={
                                window.location.pathname === "/discover"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Discover
                </Link>

                    </li>
                    <li className="nav-item">
                        <Link to="/search"
                            className={window.location.pathname === "/search"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                            Search
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
)


export default Navbar;

