import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    const vendors = props.vendors
    console.log('vendors from sidebard', vendors)
    return (
        vendors.map((vendor) => (
            <Link to={`/vendors/${vendor.id}`} className="sidebar-vendors">
                {vendor.name}
            </Link>
        ))
    )
};

export default Sidebar;