import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
                <Link to="/" className="navbar-brand ms-3">React Redux Contact App</Link>
            </nav>
            {/* <nav>
                <Link to="/add">Add Contact</Link> &nbsp;&nbsp;
                <Link to="/edit">Edit Contact</Link> &nbsp;&nbsp;
            </nav> */}
        </div>
    )
}

export default Navbar;