import React from "react";
import {Link} from "react-router-dom"


const Header = (props) => {
    return (
    <div className="header-container">
        <Link to="/" className="logo">
                <h1>Ed-Suite</h1>
        </Link>

        <div className="navbar-links">
                <Link to="/" className="home-button"><h3>Home</h3></Link>
                <Link to="/newvendor" className="vendor-button"><h3>Create Vendor</h3></Link>
                <Link to="/" className="po-button"><h3>Create PO</h3></Link>
                <Link to="/" className="about-button"><h3>About</h3></Link>
        </div>
    </div>
    )
};

export default Header;