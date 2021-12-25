import React from "react";

const Sidebar = (props) => {
    const vendors = props.vendors
    return (
        vendors.map((vendor, index) => (
            <div>
                {vendor.name}
            </div>
        ))
    )
};

export default Sidebar;