import React from "react";

const VendorForm = (props) => {
    const vendors = props.vendors
    console.log('Vendor Form Props: ', vendors)
    return (
        vendors.map((vendor, index) => (
            <div key={index}>
                {vendor.name}
            </div>
        ))
    
    )
};

export default VendorForm;