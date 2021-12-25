import React from "react";


const Header = (props) => {
    return (
    <div className="header-container">
        <div className="logo">
            <h1>Ed-Suite</h1>
        </div>
        <div className="navbar-links">
            <div className="home-button">
            <h3>Home</h3>
            </div>
            <div className="vendor-button">
                <h3>Create Vendor</h3>
            </div>
            <div className="po-button">
                <h3>Create PO</h3>
            </div>
            <div className="about-button">
                <h3>About</h3>
            </div>
        </div>
    </div>
    )
};

export default Header;