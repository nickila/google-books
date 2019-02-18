import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Google Books</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={ window.location.pathname === "/search" ? "nav-item active" : "nav-item" }>
                            <Link className="nav-link" to="/search">Search</Link>
                        </li>
                        <li className={ window.location.pathname === "/" ? "nav-item active" : "nav-item" }>
                            <Link className="nav-link" to="/">Saved</Link>
                        </li>
                    </ul>
                    <br />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;